const { ethers } = require("ethers");
//
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

// Generate a new wallet
const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic.phrase,
  };
};

// Check balance of a wallet
const getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
};

// Send a transaction
const sendTransaction = async (privateKey, to, amount) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const tx = {
    to,
    value: ethers.parseEther(amount),
    gasLimit: 21000,
    maxFeePerGas: ethers.parseUnits("20", "gwei"),
    maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"),
  };
  const transaction = await wallet.sendTransaction(tx);
  return transaction.hash;
};

module.exports = { createWallet, getBalance, sendTransaction };
