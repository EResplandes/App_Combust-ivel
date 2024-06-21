// import axios from "axios";
import api from "../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cadastraAbastecimento = async (dados) => {
  const idFrentista = await AsyncStorage.getItem("id_frentista");

  // 1º Passo -> Montar objeto a ser enviado para o endpoint
  const dadosInseridos = {
    motorista: dados?.motorista,
    placa: dados?.placa,
    maquina: dados?.veiculo,
    horimetro: dados?.horimetro,
    Quantidade_ML: 0,
    id_frentista: idFrentista,
  };

  // 2º Passo -> Realizar requisição
  try {
    const response = await api.post(
      `/web/abastecimento/cadastrar-abastecimento`,
      dadosInseridos
    );
    return response;
  } catch (error) {
    console.error("Erro ao fazer requisição:", error);
    throw error; // Você pode tratar o erro conforme necessário
  }
};

export default cadastraAbastecimento;
