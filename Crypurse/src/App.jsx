import React from "react";
import WalletGenerator from "./components/WalletGenerator";
import WalletBalance from "./components/WalletBalance";
import SendTransaction from "./components/SendTransaction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <h1>Blockchain Wallet</h1>
      <WalletGenerator />
      <WalletBalance />
      <SendTransaction />
      <ToastContainer />
    </div>
  );
};

export default App;
