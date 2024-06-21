import validator from "validator";

const validaAbastecimento = (dados) => {
  
  if (!dados.horimetro) {
    return "O campo HORIMETRO é obrigatório!";
  }

  return null; // Retorna null se a autenticação for válida
};

export default validaAbastecimento;
