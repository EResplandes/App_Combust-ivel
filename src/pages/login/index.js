import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { useState } from "react";
import autenticar from "../../hooks/Login";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  // Variáveis da Tela de Login
  const [dados, setDados] = useState({});

  const navigation = useNavigation(); // Iniciando navigation

  // Funções
  const login = async () => {
    let query = await autenticar(dados);

    if (query) {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imagem}
        />
      </View>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#fff"
          keyboardType="email-address" // Configura o teclado para tipo e-mail
          autoCapitalize="none" // caracter minusculo
          onChangeText={(d) => {
            setDados({
              ...dados,
              email: d,
            });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true} // Esconde o texto digitado
          onChangeText={(d) => {
            setDados({
              ...dados,
              senha: d,
            });
          }}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.botao} onPress={login}>
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
