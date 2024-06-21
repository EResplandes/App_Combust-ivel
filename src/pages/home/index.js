import { Text, View, Alert, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "./style";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function Home() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setScanned(false);
    }, [scanned])
  );

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    try {
      const jsonData = JSON.parse(data);
      navigation.navigate("Formulario", { jsonData });
    } catch (error) {
      Alert.alert("Erro", "Erro ao ler QRCode");
    }
  };

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>É necessário o aceite da permissão!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leia o QRCode!</Text>
      <Text style={styles.paragraph}>Aponte para o QRCode do veículo.</Text>
      {renderCamera()}
    </View>
  );
}
