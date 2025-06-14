

import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  try {
    const jsonValue = await AsyncStorage.getItem('@clientes');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Erro ao listar clientes do AsyncStorage:", e);
    // Pode-se relançar o erro ou retornar uma lista vazia, dependendo do tratamento desejado
    return [];
  }
}

async function salvar(cliente) {
  try {
    cliente.id = new Date().getTime(); // Gera um ID baseado no timestamp
    const clientes = await listar(); // Obtém a lista atual de clientes
    clientes.push(cliente); // Adiciona o novo cliente
    await AsyncStorage.setItem('@clientes', JSON.stringify(clientes)); // Salva a lista atualizada
  } catch (e) {
    console.error("Erro ao salvar cliente no AsyncStorage:", e);
    // Pode-se relançar o erro
    throw e;
  }
}

async function buscar(id) {
  try {
    const clientes = await listar();
    return clientes.find(cliente => cliente.id === id);
  } catch (e) {
    console.error("Erro ao buscar cliente no AsyncStorage:", e);
    return undefined; // Retorna undefined se houver erro ou não encontrar
  }
}

async function remover(id) {
  try {
    const clientes = await listar();
    const novaLista = clientes.filter(cliente => cliente.id !== id);
    await AsyncStorage.setItem('@clientes', JSON.stringify(novaLista));
  } catch (e) {
    console.error("Erro ao remover cliente do AsyncStorage:", e);
    throw e;
  }
}

async function atualizar(novoCliente) {
  try {
    const clientes = await listar();
    // Mapeia a lista, substituindo o cliente antigo pelo novo se o ID corresponder
    const novaLista = clientes.map(cliente => cliente.id === novoCliente.id ? novoCliente : cliente);
    await AsyncStorage.setItem('@clientes', JSON.stringify(novaLista));
  } catch (e) {
    console.error("Erro ao atualizar cliente no AsyncStorage:", e);
    throw e;
  }
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};