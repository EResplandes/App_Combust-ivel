import axios from "axios";
import pegaToken from '../utils/index';

// Crie uma instância do Axios
const api = axios.create({
  baseURL: "https://ef4b-85-113-93-90.ngrok-free.app/api", // Coloque a base URL da sua API aqui
});

// Adicione um interceptor de requisição
api.interceptors.request.use(
  async (config) => {
    // Obtenha o token JWT de onde ele estiver armazenado (ex: localStorage, AsyncStorage, etc.)
    const token = await pegaToken(); // Supondo que você tenha uma função getToken() para obter o token

      // config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exporte a instância configurada do Axios
export default api;
