import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  const jsonValue = await AsyncStorage.getItem('@contas');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

async function salvar(conta) {
  conta.id = new Date().getTime();
  const contas = await listar();
  contas.push(conta);
  await AsyncStorage.setItem('@contas', JSON.stringify(contas));
}

async function buscar(id) {
  const contas = await listar();
  return contas.find(conta => conta.id === id);
}

async function remover(id) {
  const contas = await listar();
  const novaLista = contas.filter(conta => conta.id !== id);
  await AsyncStorage.setItem('@contas', JSON.stringify(novaLista));
}

async function atualizar(novoConta) {
  const contas = await listar();
  const novaLista = contas.map(conta => conta.id === novoConta.id ? novoConta : conta);
  await AsyncStorage.setItem('@contas', JSON.stringify(novaLista));
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};



