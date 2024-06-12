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

  textLogin: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    fontSize: 25,
    fontWeight: "400",
    color: '#fff'
  },

  input: {
    height: moderateScale(60),
    width: moderateScale(300),
    margin: 12,
    borderColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    color: '#fff'
  },

  botao: {
    marginTop: 10,
    height: moderateScale(50),
    width: moderateScale(300),
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#000000",
    textAlign: "center",
    fontWeight: '500'
  },
});
