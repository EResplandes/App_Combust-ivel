import abastecimentoService from "../services/AbastecimentoService";
import validaAbastecimento from "../validations/AbastecimentoValidation";
import { Alert } from "react-native";

const abastecimento = async (dados) => {
  // 1º Passo -> Validar dados
  const validacao = validaAbastecimento(dados);

  // 2º Passo -> Realizar cadastro de dados no banco
  if (validacao == null) {
    const req = await abastecimentoService(dados);

    if (req.data.resposta == "Abastecimento iniciado com sucesso!") {
      return true;
    } else {
      Alert.alert(
        "Erro",
        "Ocorreu algum erro, entre em contato com o Administrador",
        [{ text: "Entendido" }]
      );
    }
  } else {
    Alert.alert("Erro", validacao, [{ text: "Entendido" }]);
  }
};

export default abastecimento;
