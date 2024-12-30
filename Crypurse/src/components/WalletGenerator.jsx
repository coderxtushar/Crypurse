import React, { useState } from "react";
import { createWallet } from "../api";
import { toast } from "react-toastify";

const WalletGenerator = () => {
  const [wallet, setWallet] = useState(null);

  const handleGenerateWallet = async () => {
    try {
      const newWallet = await createWallet();
      setWallet(newWallet);
      toast.success("Wallet created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create wallet!");
    }
  };

  return (
    <div>
      <h2>Generate Wallet</h2>
      <button onClick={handleGenerateWallet}>Create Wallet</button>
      {wallet && (
        <div>
          <p><strong>Address:</strong> {wallet.address}</p>
          <p><strong>Private Key:</strong> {wallet.privateKey}</p>
          <p><strong>Mnemonic:</strong> {wallet.mnemonic}</p>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
