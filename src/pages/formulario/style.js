import { StyleSheet } from "react-native";
import { getHeight, moderateScale } from "../../common/constant";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    width: "80%",
    marginTop: moderateScale(20),
  },

  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(10),
  },

  label: {
    width: moderateScale(80),
    fontWeight: "bold",
    marginRight: moderateScale(10),
  },

  input: {
    color: "black",
  },

  icon: {
    marginRight: 10,
  },

  title: {
    fontSize: moderateScale(20),
    fontWeight: "500",
    color: "#fff",
    marginBottom: 50,
  },

  inputHorimeto: {
    color: "black",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },

  botao: {
    marginTop: 20,
    backgroundColor: "#1962a5",
    padding: 20,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "500",
  },

  textoHorimetro: {
    fontWeight: "500",
  },

  viewForm: {
    marginTop: moderateScale(20),
    backgroundColor: "#fff",
    padding: moderateScale(20),
  },

  imagem: {
    width: moderateScale(150),
    height: moderateScale(150),
    marginBottom: moderateScale(20),
    borderWidth: 2,
  },

  wave: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
