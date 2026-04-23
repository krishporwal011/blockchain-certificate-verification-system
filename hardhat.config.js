import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const RPC_URL = process.env.RPC_URL || "";

export default {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      type: "edr-simulated"
    },
    localhost: {
      type: "http",
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      type: "http",
      url: RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
