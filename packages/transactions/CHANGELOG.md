# @herond/transactions

## 0.40.5

### Patch Changes

- api: update bindings
- Updated dependencies
  - @herond/abi@0.40.5
  - @herond/network@0.40.5
  - @herond/utils@0.40.5

## 0.40.4

### Patch Changes

- add unreal transport
- Updated dependencies
  - @herond/abi@0.40.4
  - @herond/network@0.40.4
  - @herond/utils@0.40.4

## 0.40.3

### Patch Changes

- provider: fix MessageToSign message type
- Updated dependencies
  - @herond/abi@0.40.3
  - @herond/network@0.40.3
  - @herond/utils@0.40.3

## 0.40.2

### Patch Changes

- Wallet provider, loadSession method
- Updated dependencies
  - @herond/abi@0.40.2
  - @herond/network@0.40.2
  - @herond/utils@0.40.2

## 0.40.1

### Patch Changes

- export sequence.initWallet and sequence.getWallet
- Updated dependencies
  - @herond/abi@0.40.1
  - @herond/network@0.40.1
  - @herond/utils@0.40.1

## 0.40.0

### Minor Changes

- add sequence.initWallet(network, config) and sequence.getWallet() helper methods

### Patch Changes

- Updated dependencies
  - @herond/abi@0.40.0
  - @herond/network@0.40.0
  - @herond/utils@0.40.0

## 0.39.6

### Patch Changes

- indexer: update client bindings
- Updated dependencies
  - @herond/abi@0.39.6
  - @herond/network@0.39.6
  - @herond/utils@0.39.6

## 0.39.5

### Patch Changes

- provider: fix networkRpcUrl config option
- Updated dependencies
  - @herond/abi@0.39.5
  - @herond/network@0.39.5
  - @herond/utils@0.39.5

## 0.39.4

### Patch Changes

- api: update client bindings
- Updated dependencies
  - @herond/abi@0.39.4
  - @herond/network@0.39.4
  - @herond/utils@0.39.4

## 0.39.3

### Patch Changes

- add request method on Web3Provider
- Updated dependencies
  - @herond/abi@0.39.3
  - @herond/network@0.39.3
  - @herond/utils@0.39.3

## 0.39.2

### Patch Changes

- update umd name
- Updated dependencies
  - @herond/abi@0.39.2
  - @herond/network@0.39.2
  - @herond/utils@0.39.2

## 0.39.1

### Patch Changes

- add Aurora network
- add origin info for accountsChanged event to handle it per dapp
- Updated dependencies
- Updated dependencies
  - @herond/abi@0.39.1
  - @herond/network@0.39.1
  - @herond/utils@0.39.1

## 0.39.0

### Minor Changes

- abstract window.localStorage to interface type

### Patch Changes

- Updated dependencies
  - @herond/abi@0.39.0
  - @herond/network@0.39.0
  - @herond/utils@0.39.0

## 0.38.2

### Patch Changes

- provider: add Settings.defaultPurchaseAmount
- Updated dependencies
  - @herond/abi@0.38.2
  - @herond/network@0.38.2
  - @herond/utils@0.38.2

## 0.38.1

### Patch Changes

- update api and metadata rpc bindings
- Updated dependencies
  - @herond/abi@0.38.1
  - @herond/network@0.38.1
  - @herond/utils@0.38.1

## 0.38.0

### Minor Changes

- api: update bindings, change TokenPrice interface
- bridge: remove @herond/bridge package
- api: update bindings, rename ContractCallArg to TupleComponent

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @herond/abi@0.38.0
  - @herond/network@0.38.0
  - @herond/utils@0.38.0

## 0.37.1

### Patch Changes

- Add back sortNetworks - Removing sorting was a breaking change for dapps on older versions which directly integrate sequence.
- Updated dependencies
  - @herond/abi@0.37.1
  - @herond/network@0.37.1
  - @herond/utils@0.37.1

## 0.37.0

### Minor Changes

- network related fixes and improvements
- api: bindings: exchange rate lookups

### Patch Changes

- Updated dependencies
- Updated dependencies
  - @herond/abi@0.37.0
  - @herond/network@0.37.0
  - @herond/utils@0.37.0

## 0.36.13

### Patch Changes

- api: update bindings with new price endpoints
- Updated dependencies
  - @herond/abi@0.36.13
  - @herond/network@0.36.13
  - @herond/utils@0.36.13

## 0.36.12

### Patch Changes

- wallet: skip remote signers if not needed
- auth: check that signature meets threshold before requesting auth token
- Updated dependencies
- Updated dependencies
  - @herond/abi@0.36.12
  - @herond/network@0.36.12
  - @herond/utils@0.36.12

## 0.36.11

### Patch Changes

- Prefix EIP191 message on wallet-request-handler
- Updated dependencies
  - @herond/abi@0.36.11
  - @herond/network@0.36.11
  - @herond/utils@0.36.11

## 0.36.10

### Patch Changes

- support bannerUrl on connect
- Updated dependencies
  - @herond/abi@0.36.10
  - @herond/network@0.36.10
  - @herond/utils@0.36.10

## 0.36.9

### Patch Changes

- minor dev xp improvements
- Updated dependencies
  - @herond/abi@0.36.9
  - @herond/network@0.36.9
  - @herond/utils@0.36.9

## 0.36.8

### Patch Changes

- more connect options (theme, payment providers, funding currencies)
- Updated dependencies
  - @herond/abi@0.36.8
  - @herond/network@0.36.8
  - @herond/utils@0.36.8

## 0.36.7

### Patch Changes

- fix missing break
- Updated dependencies
  - @herond/abi@0.36.7
  - @herond/network@0.36.7
  - @herond/utils@0.36.7

## 0.36.6

### Patch Changes

- wallet_switchEthereumChain support
- Updated dependencies
  - @herond/abi@0.36.6
  - @herond/network@0.36.6
  - @herond/utils@0.36.6

## 0.36.5

### Patch Changes

- auth: bump ethauth to 0.7.0
  network, wallet: don't assume position of auth network in list
  api/indexer/metadata: trim trailing slash on hostname, and add endpoint urls
  relayer: Allow to specify local relayer transaction parameters like gas price or gas limit
- Updated dependencies
  - @herond/abi@0.36.5
  - @herond/network@0.36.5
  - @herond/utils@0.36.5

## 0.36.4

### Patch Changes

- Updating list of chain ids to include other ethereum compatible chains
- Updated dependencies
  - @herond/abi@0.36.4
  - @herond/network@0.36.4
  - @herond/utils@0.36.4

## 0.36.3

### Patch Changes

- provider: pass connect options to prompter methods
- Updated dependencies
  - @herond/abi@0.36.3
  - @herond/network@0.36.3
  - @herond/utils@0.36.3

## 0.36.2

### Patch Changes

- transactions: Setting target to 0x0 when empty to during SequenceTxAbiEncode
- Updated dependencies
  - @herond/abi@0.36.2
  - @herond/network@0.36.2
  - @herond/utils@0.36.2

## 0.36.1

### Patch Changes

- metadata: update client with more fields
- Updated dependencies
  - @herond/abi@0.36.1
  - @herond/network@0.36.1
  - @herond/utils@0.36.1

## 0.36.0

### Minor Changes

- relayer, wallet: fee quote support

### Patch Changes

- Updated dependencies
  - @herond/abi@0.36.0
  - @herond/network@0.36.0
  - @herond/utils@0.36.0

## 0.35.12

### Patch Changes

- provider: rename wallet.commands to wallet.utils
- Updated dependencies
  - @herond/abi@0.35.12
  - @herond/network@0.35.12
  - @herond/utils@0.35.12

## 0.35.11

### Patch Changes

- provider/utils: smoother message validation
- Updated dependencies
  - @herond/abi@0.35.11
  - @herond/network@0.35.11
  - @herond/utils@0.35.11

## 0.35.10

### Patch Changes

- upgrade deps
- Updated dependencies
  - @herond/abi@0.35.10
  - @herond/network@0.35.10
  - @herond/utils@0.35.10

## 0.35.9

### Patch Changes

- provider: window-transport override event handlers with new wallet instance
- Updated dependencies
  - @herond/abi@0.35.9
  - @herond/network@0.35.9
  - @herond/utils@0.35.9

## 0.35.8

### Patch Changes

- provider: async wallet sign in improvements
- Updated dependencies
  - @herond/abi@0.35.8
  - @herond/network@0.35.8
  - @herond/utils@0.35.8

## 0.35.7

### Patch Changes

- config: cache wallet configs
- Updated dependencies
  - @herond/abi@0.35.7
  - @herond/network@0.35.7
  - @herond/utils@0.35.7

## 0.35.6

### Patch Changes

- provider: support async signin of wallet request handler
- Updated dependencies
  - @herond/abi@0.35.6
  - @herond/network@0.35.6
  - @herond/utils@0.35.6

## 0.35.5

### Patch Changes

- wallet: skip threshold check during fee estimation
- Updated dependencies
  - @herond/abi@0.35.5
  - @herond/network@0.35.5
  - @herond/utils@0.35.5

## 0.35.4

### Patch Changes

- - browser extension mode, center window
- Updated dependencies
  - @herond/abi@0.35.4
  - @herond/network@0.35.4
  - @herond/utils@0.35.4

## 0.35.3

### Patch Changes

- - update window position when in browser extension mode
- Updated dependencies
  - @herond/abi@0.35.3
  - @herond/network@0.35.3
  - @herond/utils@0.35.3

## 0.35.2

### Patch Changes

- - provider: WindowMessageHandler accept optional windowHref
- Updated dependencies
  - @herond/abi@0.35.2
  - @herond/network@0.35.2
  - @herond/utils@0.35.2

## 0.35.1

### Patch Changes

- wallet: update config on undeployed too
- Updated dependencies
  - @herond/abi@0.35.1
  - @herond/network@0.35.1
  - @herond/utils@0.35.1

## 0.35.0

### Minor Changes

- - config: add buildStubSignature
  - provider: add checks to signing cases for wallet deployment and config statuses
  - provider: add prompt for wallet deployment
  - relayer: add BaseRelayer.prependWalletDeploy
  - relayer: add Relayer.feeOptions
  - relayer: account for wallet deployment in fee estimation
  - transactions: add fromTransactionish
  - wallet: add Account.prependConfigUpdate
  - wallet: add Account.getFeeOptions

### Patch Changes

- Updated dependencies
  - @herond/abi@0.35.0
  - @herond/network@0.35.0
  - @herond/utils@0.35.0

## 0.34.0

### Minor Changes

- - upgrade deps

### Patch Changes

- Updated dependencies
  - @herond/abi@0.34.0
  - @herond/network@0.34.0
  - @herond/utils@0.34.0

## 0.33.2

### Patch Changes

- transactions: fix incorrect nonce comparison

## 0.31.0

### Minor Changes

- - upgrading to ethers v5.5

### Patch Changes

- Updated dependencies
  - @herond/abi@0.31.0
  - @herond/network@0.31.0
  - @herond/utils@0.31.0

## 0.30.0

### Minor Changes

- - upgrade most deps

### Patch Changes

- Updated dependencies
  - @herond/abi@0.30.0
  - @herond/network@0.30.0
  - @herond/utils@0.30.0

## 0.29.8

### Patch Changes

- update api
- Updated dependencies [undefined]
  - @herond/abi@0.29.8
  - @herond/network@0.29.8
  - @herond/utils@0.29.8

## 0.29.6

### Patch Changes

- Updated dependencies [undefined]
  - @herond/network@0.29.6

## 0.29.0

### Minor Changes

- major architectural changes in Sequence design

  - only one API instance, API is no longer a per-chain service
  - separate per-chain indexer service, API no longer handles indexing
  - single contract metadata service, API no longer serves metadata

  chaind package has been removed, indexer and metadata packages have been added

  stronger typing with new explicit ChainId type

  multicall fixes and improvements

  forbid "wait" transactions in sendTransactionBatch calls

### Patch Changes

- Updated dependencies [undefined]
  - @herond/network@0.29.0
  - @herond/abi@0.29.0
  - @herond/utils@0.29.0

## 0.28.0

### Minor Changes

- extension provider

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.28.0
  - @herond/chaind@0.28.0
  - @herond/network@0.28.0
  - @herond/utils@0.28.0

## 0.27.0

### Minor Changes

- Add requireFreshSigner lib to sessions

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.27.0
  - @herond/chaind@0.27.0
  - @herond/network@0.27.0
  - @herond/utils@0.27.0

## 0.25.1

### Patch Changes

- Fix build typescrypt issue
- Updated dependencies [undefined]
  - @herond/abi@0.25.1
  - @herond/chaind@0.25.1
  - @herond/network@0.25.1
  - @herond/utils@0.25.1

## 0.25.0

### Minor Changes

- 10c8af8: Add estimator package
  Fix multicall few calls bug

### Patch Changes

- Updated dependencies [10c8af8]
  - @herond/abi@0.25.0
  - @herond/chaind@0.25.0
  - @herond/network@0.25.0
  - @herond/utils@0.25.0

## 0.23.0

### Minor Changes

- - relayer: offer variety of gas fee options from the relayer service"

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.23.0
  - @herond/chaind@0.23.0
  - @herond/network@0.23.0
  - @herond/utils@0.23.0

## 0.22.2

### Patch Changes

- e1c109e: Fix authProof on expired sessions
- Updated dependencies [e1c109e]
  - @herond/abi@0.22.2
  - @herond/chaind@0.22.2
  - @herond/network@0.22.2
  - @herond/utils@0.22.2

## 0.22.1

### Patch Changes

- transport session cache
- Updated dependencies [undefined]
  - @herond/abi@0.22.1
  - @herond/chaind@0.22.1
  - @herond/network@0.22.1
  - @herond/utils@0.22.1

## 0.22.0

### Minor Changes

- e667b65: Expose all relayer options on networks

### Patch Changes

- Updated dependencies [e667b65]
  - @herond/abi@0.22.0
  - @herond/network@0.22.0
  - @herond/utils@0.22.0
  - @herond/chaind@0.22.0

## 0.21.5

### Patch Changes

- Give priority to metaTxnId returned by relayer
- Updated dependencies [undefined]
  - @herond/abi@0.21.5
  - @herond/chaind@0.21.5
  - @herond/network@0.21.5
  - @herond/utils@0.21.5

## 0.21.4

### Patch Changes

- Add has enough signers method
- Updated dependencies [undefined]
  - @herond/abi@0.21.4
  - @herond/chaind@0.21.4
  - @herond/network@0.21.4
  - @herond/utils@0.21.4

## 0.21.3

### Patch Changes

- add window session cache
- Updated dependencies [undefined]
  - @herond/abi@0.21.3
  - @herond/chaind@0.21.3
  - @herond/network@0.21.3
  - @herond/utils@0.21.3

## 0.21.2

### Patch Changes

- exception handlind in relayer
- Updated dependencies [undefined]
  - @herond/abi@0.21.2
  - @herond/chaind@0.21.2
  - @herond/network@0.21.2
  - @herond/utils@0.21.2

## 0.21.0

### Minor Changes

- - fix gas estimation on wallets with large number of signers
  - update to session handling and wallet config construction upon auth

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.21.0
  - @herond/chaind@0.21.0
  - @herond/network@0.21.0
  - @herond/utils@0.21.0

## 0.19.3

### Patch Changes

- jwtAuth visibility, package version sync
- Updated dependencies [undefined]
  - @herond/abi@0.19.3
  - @herond/chaind@0.19.3
  - @herond/network@0.19.3
  - @herond/utils@0.19.3

## 0.19.2

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.19.2

## 0.19.0

### Minor Changes

- - provider, improve dapp / wallet transport io

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.19.0
  - @herond/chaind@0.19.0
  - @herond/network@0.19.0
  - @herond/utils@0.19.0

## 0.18.0

### Minor Changes

- relayer improvements and pending transaction handling

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.18.0
  - @herond/chaind@0.18.0
  - @herond/network@0.18.0
  - @herond/utils@0.18.0

## 0.16.0

### Minor Changes

- relayer as its own service separate from chaind

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.16.0
  - @herond/chaind@0.16.0
  - @herond/network@0.16.0

## 0.15.1

### Patch Changes

- update api clients
- Updated dependencies [undefined]
  - @herond/abi@0.15.1
  - @herond/chaind@0.15.1
  - @herond/network@0.15.1

## 0.15.0

### Patch Changes

- Updated dependencies [undefined]
  - @herond/chaind@0.15.0

## 0.14.3

### Patch Changes

- Fix 0xSequence relayer dependencies
- Updated dependencies [undefined]
  - @herond/abi@0.14.3
  - @herond/chaind@0.14.3
  - @herond/network@0.14.3

## 0.14.2

### Patch Changes

- Add debug logs to rpc-relayer
- Updated dependencies [undefined]
  - @herond/abi@0.14.2
  - @herond/chaind@0.14.2
  - @herond/network@0.14.2

## 0.14.0

### Minor Changes

- update sequence utils finder which includes optimization

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.14.0
  - @herond/chaind@0.14.0
  - @herond/network@0.14.0

## 0.13.0

### Minor Changes

- Update SequenceUtils deployed contract

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.13.0
  - @herond/chaind@0.13.0
  - @herond/network@0.13.0

## 0.12.1

### Patch Changes

- npm bump
- Updated dependencies [undefined]
  - @herond/abi@0.12.1
  - @herond/chaind@0.12.1
  - @herond/network@0.12.1

## 0.12.0

### Minor Changes

- provider: improvements to window transport

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.12.0
  - @herond/chaind@0.12.0
  - @herond/network@0.12.0

## 0.11.4

### Patch Changes

- update api client
- Updated dependencies [undefined]
  - @herond/abi@0.11.4
  - @herond/chaind@0.11.4
  - @herond/network@0.11.4

## 0.11.3

### Patch Changes

- improve openWindow state options handling
- Updated dependencies [undefined]
  - @herond/abi@0.11.3
  - @herond/chaind@0.11.3
  - @herond/network@0.11.3

## 0.11.2

### Patch Changes

- Fix multicall proxy scopes
- Updated dependencies [undefined]
  - @herond/abi@0.11.2
  - @herond/chaind@0.11.2
  - @herond/network@0.11.2

## 0.11.1

### Patch Changes

- Add support for dynamic and nested signatures
- Updated dependencies [undefined]
  - @herond/abi@0.11.1
  - @herond/chaind@0.11.1
  - @herond/network@0.11.1

## 0.11.0

### Minor Changes

- Update wallet context to 1.7 contracts

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.11.0
  - @herond/chaind@0.11.0
  - @herond/network@0.11.0

## 0.10.9

### Patch Changes

- add support for public addresses as signers in session.open
- Updated dependencies [undefined]
  - @herond/abi@0.10.9
  - @herond/chaind@0.10.9
  - @herond/network@0.10.9

## 0.10.8

### Patch Changes

- Multicall production configuration
- Updated dependencies [undefined]
  - @herond/abi@0.10.8
  - @herond/chaind@0.10.8
  - @herond/network@0.10.8

## 0.10.7

### Patch Changes

- allow provider transport to force disconnect
- Updated dependencies [undefined]
  - @herond/abi@0.10.7
  - @herond/chaind@0.10.7
  - @herond/network@0.10.7

## 0.10.6

### Patch Changes

- - fix getWalletState method
- Updated dependencies [undefined]
  - @herond/abi@0.10.6
  - @herond/chaind@0.10.6
  - @herond/network@0.10.6

## 0.10.5

### Patch Changes

- update relayer gas refund options
- Updated dependencies [undefined]
  - @herond/abi@0.10.5
  - @herond/chaind@0.10.5
  - @herond/network@0.10.5

## 0.10.4

### Patch Changes

- Update api proto
- Updated dependencies [undefined]
  - @herond/abi@0.10.4
  - @herond/chaind@0.10.4
  - @herond/network@0.10.4

## 0.10.3

### Patch Changes

- Fix loading config cross-chain
- Updated dependencies [undefined]
  - @herond/abi@0.10.3
  - @herond/chaind@0.10.3
  - @herond/network@0.10.3

## 0.10.2

### Patch Changes

- - message digest fix
- Updated dependencies [undefined]
  - @herond/abi@0.10.2
  - @herond/chaind@0.10.2
  - @herond/network@0.10.2

## 0.10.1

### Patch Changes

- upgrade deps
- Updated dependencies [undefined]
  - @herond/abi@0.10.1
  - @herond/chaind@0.10.1
  - @herond/network@0.10.1

## 0.10.0

### Minor Changes

- Deployed new contracts with ERC1271 signer support

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.10.0
  - @herond/chaind@0.10.0
  - @herond/network@0.10.0

## 0.9.6

### Patch Changes

- Update ABIs for latest sequence contracts
- Updated dependencies [undefined]
  - @herond/network@0.9.6
  - @herond/abi@0.9.6
  - @herond/chaind@0.9.6

## 0.9.5

### Patch Changes

- Implemented session class
- Updated dependencies [undefined]
  - @herond/network@0.9.5

## 0.9.3

### Patch Changes

- - minor improvements
- Updated dependencies [undefined]
  - @herond/abi@0.9.3
  - @herond/chaind@0.9.3
  - @herond/network@0.9.3

## 0.9.1

### Patch Changes

- - patch bump
- Updated dependencies [undefined]
  - @herond/abi@0.9.1
  - @herond/chaind@0.9.1
  - @herond/network@0.9.1

## 0.9.0

### Minor Changes

- - provider transport hardening

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.9.0
  - @herond/chaind@0.9.0
  - @herond/network@0.9.0

## 0.8.5

### Patch Changes

- - use latest wallet-contracts
- Updated dependencies [undefined]
  - @herond/abi@0.8.5
  - @herond/chaind@0.8.5
  - @herond/network@0.8.5

## 0.8.4

### Patch Changes

- - minor improvements, name updates and comments
- Updated dependencies [undefined]
  - @herond/abi@0.8.4
  - @herond/chaind@0.8.4
  - @herond/network@0.8.4

## 0.8.3

### Patch Changes

- - refinements

  - normalize signer address in config

  - provider: getWalletState() method to WalletProvider

- Updated dependencies [undefined]
  - @herond/abi@0.8.3
  - @herond/chaind@0.8.3
  - @herond/network@0.8.3

## 0.8.2

### Patch Changes

- - field rename and ethauth dependency bump
- Updated dependencies [undefined]
  - @herond/abi@0.8.2
  - @herond/chaind@0.8.2
  - @herond/network@0.8.2

## 0.8.1

### Patch Changes

- - variety of optimizations
- Updated dependencies [undefined]
  - @herond/abi@0.8.1
  - @herond/chaind@0.8.1
  - @herond/network@0.8.1

## 0.8.0

### Minor Changes

- - changeset fix

### Patch Changes

- Updated dependencies [undefined]
  - @herond/abi@0.8.0
  - @herond/chaind@0.8.0
  - @herond/network@0.8.0

## 0.7.2

### Patch Changes

- package.json fix

## 0.7.0

### Patch Changes

- 6f11ed7: sequence.js, init release
- Updated dependencies [6f11ed7]
  - @herond/abi@0.7.0
  - @herond/chaind@0.7.0
  - @herond/network@0.7.0
