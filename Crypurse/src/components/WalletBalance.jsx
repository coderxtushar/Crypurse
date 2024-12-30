import React, { useState } from "react";
import { getBalance } from "../api";
import { toast } from "react-toastify";

const WalletBalance = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = async () => {
    try {
      const { balance } = await getBalance(address);
      setBalance(balance);
      toast.success("Balance fetched successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch balance!");
    }
  };

  return (
    <div>
      <h2>Check Wallet Balance</h2>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance !== null && <p><strong>Balance:</strong> {balance} ETH</p>}
    </div>
  );
};

export default WalletBalance;
