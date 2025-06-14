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
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Title style={styles.title}>Cadastro</Title>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />

        <TextInput
          label="Tipo de Assinatura/Conta"
          value={tipoAssinatura}
          onChangeText={setTipoAssinatura}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Forma de Pagamento"
          value={formaPagamento}
          onChangeText={setFormaPagamento}
          style={styles.input}
          mode="outlined"
        />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5f2",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
});

