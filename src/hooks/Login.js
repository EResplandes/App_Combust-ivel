import autenticarService from "../services/LoginService";
import validaAutenticacao from "../validations/LoginValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import React, { useEffect, useRef } from "react";

const autenticar = async (dados) => {
  // 1º Passo -> Validar dados
  const validacao = validaAutenticacao(dados);

  if (validacao == null) {
    // 2ª Passo -> Enviar requisição
    const req = await autenticarService(dados);

    // 3ª Passo -> Verificar resposta da requisição
    if (req.data.resposta.token != null) {
      await AsyncStorage.setItem("token", req.data.resposta.token);

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
