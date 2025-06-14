<<<<<<< HEAD
import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { TextInputMask } from 'react-native-masked-text';
import CadastroService from "./CadastroService";

export default function CadastroScreen({ navigation, route }) {
  const contaAntigo = route.params || {};

  const [nome, setNome] = useState(contaAntigo.nome || "");
  const [email, setEmail] = useState(contaAntigo.email || "");
  const [senha, setSenha] = useState(contaAntigo.senha || "");
  const [tipoAssinatura, setTipoAssinatura] = useState(contaAntigo.tipoAssinatura || "");
  const [formaPagamento, setFormaPagamento] = useState(contaAntigo.formaPagamento || "");
  const [dataVencimento, setDataVencimento] = useState(contaAntigo.dataVencimento || "");

  async function salvar() {
    let conta = {
      nome,
      email,
      senha,
      tipoAssinatura,
      formaPagamento,
      dataVencimento
    };

    if (!conta.nome || !conta.email || !conta.senha || !conta.tipoAssinatura || !conta.formaPagamento || !conta.dataVencimento) {
      alert('Preencha todos os campos!');
      return;
    }

    if (contaAntigo.id) {
      conta.id = contaAntigo.id;
      await CadastroService.atualizar(conta);
      alert("Conta alterada com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: "ListarContas" }]
      });
    } else {
      await CadastroService.salvar(conta);
      alert("Conta cadastrada com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: 'ListarContas' }]
      });
=======
import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native'; // Importe Alert aqui
import { TextInputMask } from 'react-native-masked-text';
import { Button, Text, TextInput } from 'react-native-paper';

import ClienteService from './ClienteService';
export default function CadastroScreen({ navigation, route }) {
  const clienteAntigo = route.params || {};

  const [nome, setNome] = useState(clienteAntigo.nome || "");
  const [cpf, setCpf] = useState(clienteAntigo.cpf || "");
  const [email, setEmail] = useState(clienteAntigo.email || "");
  const [telefone, setTelefone] = useState(clienteAntigo.telefone || "");
  const [dataNascimento, setDataNascimento] = useState(clienteAntigo.dataNascimento || "");
  const [tipoAssinatura, setTipoAssinatura] = useState(clienteAntigo.tipoAssinatura || "");
  const [dataVencimento, setDataVencimento] = useState(clienteAntigo.dataVencimento || "");

  async function salvar() {
    let cliente = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento,
      tipoAssinatura,
      dataVencimento
    };

    // Validação: Verifique se todos os campos estão preenchidos
    if (!cliente.nome || !cliente.cpf || !cliente.email || !cliente.dataNascimento ||
        !cliente.telefone || !cliente.tipoAssinatura || !cliente.dataVencimento) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      if (clienteAntigo.id) {
        // ALTERANDO UM CLIENTE EXISTENTE
        cliente.id = clienteAntigo.id;
        await ClienteService.atualizar(cliente);
        Alert.alert("Sucesso", "Cliente alterado com sucesso!");
      } else {
        // CADASTRANDO UM NOVO CLIENTE
        await ClienteService.salvar(cliente);
        Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
      }

      // Após salvar/atualizar com sucesso, navegue de volta para a lista de clientes
      navigation.reset({
        index: 0,
        routes: [{ name: 'ClienteLista' }]
      });

    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o cliente. Tente novamente.");
>>>>>>> 0500b8cb5a8ef7484de6af85b0d6859a8edc32e0
    }
  }

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Title style={styles.title}>Cadastro</Title>
=======
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados do Cliente:</Text>
>>>>>>> 0500b8cb5a8ef7484de6af85b0d6859a8edc32e0

      <Text variant='titleLarge'>ID CLIENTE: {clienteAntigo.id || 'NOVO'}</Text>

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Nome"
        placeholder='Informe o nome'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="CPF"
        placeholder='Informe o CPF'
        value={cpf}
        onChangeText={setCpf}
        keyboardType='decimal-pad'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cpf'}
          />
        )}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="E-mail"
        placeholder='Informe o E-mail'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Telefone"
        placeholder='Informe o Telefone'
        value={telefone}
        onChangeText={setTelefone}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99)'
            }}
          />
        )}
      />

<<<<<<< HEAD
        <TextInput
          label="Data de Vencimento"
          value={dataVencimento}
          onChangeText={setDataVencimento}
          style={styles.input}
          mode="outlined"
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
          render={props => (
            <TextInputMask
              {...props}
              type={'datetime'}
              options={{ format: 'DD/MM/YYYY' }}
            />
          )}
        />

        <Button mode="contained" onPress={salvar} style={styles.button}>
          Cadastrar
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

=======
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Data de Nascimento"
        placeholder='DD/MM/AAAA'
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
          />
        )}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Tipo de Assinatura"
        placeholder='Ex: Mensal, Anual'
        value={tipoAssinatura}
        onChangeText={setTipoAssinatura}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Data de Vencimento"
        placeholder='DD/MM/AAAA'
        value={dataVencimento}
        onChangeText={setDataVencimento}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
          />
        )}
      />

      <Button
        style={styles.input}
        mode='contained'
        onPress={salvar}
      >
        Salvar
      </Button>

    </View>
  );
}
>>>>>>> 0500b8cb5a8ef7484de6af85b0d6859a8edc32e0
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    width: '90%',
    marginTop: 10
  }
});

