import axios from "axios";
import pegaToken from "../utils/index";

// Crie uma instância do Axios
const api = axios.create({
  baseURL: "https://d00c-85-113-93-90.ngrok-free.app/api", // Base URL
});

api.interceptors.request.use(
  async (config) => {
    const token = await pegaToken();

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
