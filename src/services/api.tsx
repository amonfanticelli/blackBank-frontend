import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3001",
  timeout: 5000,
});

export default api;
