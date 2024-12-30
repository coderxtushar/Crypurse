import React, { useState } from "react";
import { sendTransaction } from "../api";
import { toast } from "react-toastify";

const SendTransaction = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendTransaction = async () => {
    try {
      const data = { privateKey, to: toAddress, amount };
      const { txHash } = await sendTransaction(data);
      toast.success(`Transaction sent successfully! Hash: ${txHash}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send transaction!");
    }
  };

  return (
    <div>
      <h2>Send Transaction</h2>
      <input
        type="text"
        placeholder="Private Key"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipient Address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSendTransaction}>Send</button>
    </div>
  );
};

export default SendTransaction;
