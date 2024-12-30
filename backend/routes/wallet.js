const express = require("express");
const { createWallet, getBalance, sendTransaction } = require("../services/blockchain");
const router = express.Router();

// Route: Create Wallet
router.get("/create", (req, res) => {
  const wallet = createWallet();
  res.json(wallet);
});

// Route: Get Balance
router.get("/balance/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const balance = await getBalance(address);
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route: Send Transaction
router.post("/send", async (req, res) => {
  try {
    const { privateKey, to, amount } = req.body;
    const txHash = await sendTransaction(privateKey, to, amount);
    res.json({ txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
