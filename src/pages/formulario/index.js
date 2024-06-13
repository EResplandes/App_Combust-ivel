import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa o ícone FontAwesome
import Wave from "../../componets/Onda";

export function Formulario({ route }) {
  const { jsonData } = route.params;

  const [motorista, setMotorista] = useState(jsonData.motorista);
  const [placa, setPlaca] = useState(jsonData.placa);
  const [veiculo, setVeiculo] = useState(jsonData.veiculo);
  const [hash, setHash] = useState(jsonData.hash);

  return (
    <View  style={styles.container}>
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
            keyboardType="numeric" // Define o tipo de teclado para numérico
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Iniciar Abastecimento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
