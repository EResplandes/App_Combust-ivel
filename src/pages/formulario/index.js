import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa o ícone FontAwesome
import Wave from "../../componets/Onda";
import Abastecimento from "../../hooks/Abastecimento";
import { useNavigation } from "@react-navigation/native";

export function Formulario({ route }) {
  const { jsonData } = route.params;

  const [motorista, setMotorista] = useState(jsonData.motorista);
  const [placa, setPlaca] = useState(jsonData.placa);
  const [veiculo, setVeiculo] = useState(jsonData.veiculo);
  const [dados, setDados] = useState(jsonData);
  const [loading, setLoading] = useState(false); // Estado para controlar o indicador de carregamento
  const navigation = useNavigation(); // Iniciando navigation

  const cadastrarAbastecimento = async () => {
    setLoading(true); // Ativa o indicador de carregamento

    try {
      const req = await Abastecimento(dados); // Executa a função de cadastro (supondo que Abastecimento seja uma função assíncrona)

      if (req) {
        Alert.alert("Sucesso", 'Abastecimento iniciado com sucesso!', [{ text: "Entendido" }]);
        navigation.navigate("Preloader");
      }
    } catch (error) {
      console.error("Erro ao cadastrar abastecimento:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Wave style={styles.wave} />
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imagem}
      />
      <Text style={styles.title}>INFORMAÇÕES DO VEÍCULO</Text>

      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Icon name="user" size={22} color="#333" style={styles.icon} />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Motorista:</Text>
            <Text style={styles.value}>{motorista}</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Icon name="car" size={15} color="#333" style={styles.icon} />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Placa:</Text>
            <Text style={styles.value}>{placa}</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Icon name="truck" size={15} color="#333" style={styles.icon} />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Veículo:</Text>
            <Text style={styles.value}>{veiculo}</Text>
          </View>
        </View>

        <View style={styles.viewForm}>
          <Text style={styles.textoHorimetro}>Digite o Horimetro:</Text>
          <TextInput
            style={styles.inputHorimeto}
            placeholder="Digite aqui!"
            keyboardType="numeric"
            onChangeText={(d) => {
              setDados({
                ...dados,
                horimetro: d,
              });
            }}
          />

          <TouchableOpacity
            onPress={cadastrarAbastecimento}
            style={styles.botao}
            disabled={loading} // Desativa o botão enquanto estiver carregando
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.textoBotao}>Iniciar Abastecimento</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
