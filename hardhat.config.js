require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rome: {
      url: "https://rome.testnet.romeprotocol.xyz",
      chainId: 200002,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
