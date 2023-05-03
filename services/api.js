import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-my-wallet-render.onrender.com",
});

export const localhost = axios.create({
  baseURL: "https://back-my-wallet-render.onrender.com",
});
