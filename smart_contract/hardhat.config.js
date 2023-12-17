require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/9Npnvi2Utth50K1GSwph6PU3UfFpnH15',
      accounts: ['7ba179556283c348837dc296016411457134f686189f8a6f6bc747cda23af544'],
    },
  },
};