import axios from "axios";
import BASE_URL from "./config";

// Create a new wallet
export const createWallet = async () => {
  const response = await axios.get(`${BASE_URL}/create`);
  return response.data;
};

// Get wallet balance
export const getBalance = async (address) => {
  const response = await axios.get(`${BASE_URL}/balance/${address}`);
  return response.data;
};

// Send a transaction
export const sendTransaction = async (data) => {
  const response = await axios.post(`${BASE_URL}/send`, data);
  return response.data;
};
