import autenticarService from "../services/LoginService";
import validaAutenticacao from "../validations/LoginValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const autenticar = async (dados) => {
  // 1º Passo -> Validar dados
  const validacao = validaAutenticacao(dados);

  if (validacao == null) {
    // 2ª Passo -> Enviar requisição
    const req = await autenticarService(dados);

    // 3ª Passo -> Verificar resposta da requisição
    if (req.data.resposta.token != null) {
      await AsyncStorage.setItem("token", req.data.resposta.token);
      await AsyncStorage.setItem(
        "id_frentista",
        req.data.resposta.usuario[0].id.toString()
      );

      return true;
    } else {
      Alert.alert("Erro", "Login ou Senha inválido!", [{ text: "Entendido" }]);
    }

    // 4ª Passo -> Se autenticação ocorrer com sucesso, encaminhar para Home, se não exibir mensagem de erro
    navigation.navigate("Home");
  } else {
    Alert.alert("Erro", validacao, [{ text: "Entendido" }]);
  }
};

export default autenticar;
