// import axios from "axios";
import api from "../services/config";

const autenticarService = async (dados) => {
  // 1º Passo -> Montar objeto a ser enviado para o endpoint
  const dadosInseridos = {
    email: dados?.email,
    password: dados?.senha,
  };

  // 2º Passo -> Realizar requisição
  try {
    const response = await api.post(`/web/auth/login`, dadosInseridos);
    return response;
  } catch (error) {
    console.error("Erro ao fazer requisição:", error);
    throw error; // Você pode tratar o erro conforme necessário
  }
};

export default autenticarService;
