import AsyncStorage from "@react-native-async-storage/async-storage";

async function pegaToken() {
  const token = AsyncStorage.getItem("token");

  return token;
}

export default pegaToken;
