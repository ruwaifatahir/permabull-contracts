import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.6.12",

  networks: {
    goerli: {
      url: process.env.GOERLI_TESTNET_URL,
      chainId: 5,
      accounts: { mnemonic: process.env.PRIVATE_KEY },
    },

    bsctestnet: {
      url: process.env.BSC_TESTNET_URL,
      chainId: 97,
      accounts: { mnemonic: process.env.PRIVATE_KEY },
    },
  },

  etherscan: {
    apiKey: {
      goerli: process.env.GOERLI_TESTNET_API_KEY
        ? process.env.GOERLI_TESTNET_API_KEY
        : "",
      bscTestnet: process.env.BSC_TESTNET_API_KEY
        ? process.env.BSC_TESTNET_API_KEY
        : "",
    },
  },
};

export default config;
