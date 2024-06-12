import { View, Image, BackHandler } from "react-native";
import styles from "./style";
import React, { useEffect, useRef } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Preloader() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const verificaExistenciaToken = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          if (token) {
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }
        } catch (error) {
          console.error("Erro ao verificar o token:", error);
        }
      };

      verificaExistenciaToken();

      return () => {};
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imagem}
        />
      </View>
    </View>
  );
}
