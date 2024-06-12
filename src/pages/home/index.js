import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
