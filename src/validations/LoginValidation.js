import validator from "validator";

const validaAutenticacao = (dados) => {
  const email = dados?.email || null;
  const senha = dados?.senha || null;

  if (!email) {
    return "O campo e-mail é obrigatório!";
  }

  if (!validator.isEmail(email)) {
    return "Digite um E-MAIL valido!";
  }

  if (!senha) {
    return "O campo SENHA é obrigatório!";
  }

  return null; // Retorna null se a autenticação for válida
};

export default validaAutenticacao;
