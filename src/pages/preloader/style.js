import { StyleSheet } from "react-native";
import { getHeight, moderateScale } from "../../common/constant";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1962a5",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: 900,
    borderWidth: 2,
  },

  texto: {
    fontSize: 15,
    fontWeight: "600",
  },

  viewTexto: {
    marginTop: 20,
  },
});
