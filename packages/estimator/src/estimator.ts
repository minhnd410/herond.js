import { WalletConfig } from "@herond/config"
import { WalletContext } from "@herond/network"
import { Transaction } from "@herond/transactions"
import { ethers } from "ethers"

export interface Estimator {
  estimateGasLimits(
    config: WalletConfig,
    context: WalletContext,
    ...transactions: Transaction[]
  ): Promise<{
    transactions:Transaction[],
    total: ethers.BigNumber
  }>
}
