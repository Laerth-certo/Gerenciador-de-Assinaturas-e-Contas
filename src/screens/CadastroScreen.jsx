import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = () => {
    // Aqui você pode fazer o envio dos dados
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

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

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
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
