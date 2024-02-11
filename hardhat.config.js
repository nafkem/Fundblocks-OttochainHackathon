require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    'ottochain-mainnet': {
      url: 'https://gateway.mainnet.octopus.network/eth/otto/andk2nmw198f7on2',
      chainId: 8900,
      accounts: [process.env.PRIVATE_KEY],
      //gasPrice: 1000000000, 
    },
  },
};
