import { Alert } from 'react-native';

export const validaCadastro = (name, email, password, numeroMatricula, numeroCelular) => {
  // Validar nome (mínimo de 6 caracteres)
  if (name.trim().length < 6) {
    Alert.alert('Erro', 'O nome deve ter pelo menos 6 caracteres.');
    return false;
  }

  // Validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
    return false;
  }

  // Validar senha (mínimo de 8 caracteres, deve conter letra, número e caracter especial)
  const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!senhaRegex.test(password)) {
    Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra, um número e um caracter especial.');
    return false;
  }

  // Validar número de matrícula (9 dígitos, apenas números)
  const matriculaRegex = /^\d{9}$/;
  if (!matriculaRegex.test(numeroMatricula) || numeroMatricula.length !== 9) {
    Alert.alert('Erro', 'Por favor, insira um número de matrícula válido.');
    return false;
  }

  // Validar número de celular (apenas números, 10 ou 11 dígitos)
  const celularRegex = /^\d{10,11}$/;
  if (!celularRegex.test(numeroCelular)) {
    Alert.alert('Erro', 'Por favor, insira um número de celular válido.');
    return false;
  }

  return true;
};
