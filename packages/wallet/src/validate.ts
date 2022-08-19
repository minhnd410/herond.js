import { ethers } from 'ethers'
import { WalletContext } from '@herond/network'
import { Provider } from '@ethersproject/providers'
import { walletContracts } from '@herond/abi'
import { packMessageData } from '@herond/utils'
import { isDecodedEOASigner, isDecodedFullSigner, decodeSignature, compareAddr, addressOf } from '@herond/config'
import { recoverConfigFromDigest } from './config'

export async function isValidSignature(
  address: string,
  digest: Uint8Array,
  sig: string,
  provider?: Provider,
  walletContext?: WalletContext,
  chainId?: number
) {
  // Check if valid EOA signature
  //
  // TODO: the EOA check here assume its being passed a digest, but its not a correct assumption
  // as often the message signing is of a string of text and not a digest.
  if (
    isValidEIP712Signature(address, digest, sig) ||
    isValidEthSignSignature(address, digest, sig)
  ) return true

  // Check if valid deployed smart wallet (via erc1271 check)
  const erc1271Check = await isValidContractWalletSignature(address, digest, sig, provider)

  if (erc1271Check === undefined) {
    // If validity of wallet signature can't be determined
    // it could be a signature of a non-deployed sequence wallet
    return isValidSequenceUndeployedWalletSignature(address, digest, sig, walletContext, provider, chainId)
  }

  return erc1271Check  
}

export function isValidEIP712Signature(
  address: string,
  digest: Uint8Array,
  sig: string
): boolean {
  try {
    return compareAddr(
      ethers.utils.recoverAddress(
        digest,
        ethers.utils.splitSignature(sig)
      ),
      address
    ) === 0
  } catch {
    return false
  }
}

export function isValidEthSignSignature(
  address: string,
  digest: Uint8Array,
  sig: string
): boolean {
  try {
    const subDigest = ethers.utils.keccak256(
      ethers.utils.solidityPack(
        ['string', 'bytes32'],
        ['\x19Ethereum Signed Message:\n32', digest]
      )
    )
    return compareAddr(
      ethers.utils.recoverAddress(
        subDigest,
        ethers.utils.splitSignature(sig)
      ),
      address
    ) === 0
  } catch {
    return false
  }
}

// Check if valid Smart Contract Wallet signature, via ERC1271
export async function isValidContractWalletSignature(
  address: string,
  digest: Uint8Array,
  sig: string,
  provider?: Provider
) {
  if (!provider) return undefined
  try {
    if ((await provider.getCode(address)) === '0x') {
      // Signature validity can't be determined
      return undefined
    }

    const wallet = new ethers.Contract(address, walletContracts.erc1271.abi, provider)
    const response = await wallet.isValidSignature(digest, sig)
    return walletContracts.erc1271.returns.isValidSignatureBytes32 === response
  } catch {
    return false
  }
}

export async function isValidSequenceUndeployedWalletSignature(
  address: string,
  digest: Uint8Array,
  sig: string,
  walletContext?: WalletContext,
  provider?: Provider,
  chainId?: number
) {
  if (!provider && !chainId) return undefined // Signature validity can't be determined
  if (!walletContext) return undefined // Signature validity can't be determined

  try {
    const cid = chainId ? chainId : (await provider!.getNetwork()).chainId
    const signature = decodeSignature(sig)
    const subDigest = ethers.utils.arrayify(ethers.utils.keccak256(packMessageData(address, cid, digest)))
    const config = await recoverConfigFromDigest(subDigest, signature, provider, walletContext, chainId, true)
    const weight = signature.signers.reduce((v, s) => isDecodedEOASigner(s) || isDecodedFullSigner(s) ? v + s.weight : v, 0)
    return compareAddr(addressOf(config, walletContext), address) === 0 && weight >= signature.threshold
  } catch {
    return false
  }
}
