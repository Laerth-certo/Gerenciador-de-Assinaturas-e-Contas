import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen() {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async () => {
    if (mensagem.trim() === "") {
      Alert.alert("Atenção", "Por favor, digite uma mensagem.");
      return;
    }

    try {
      const novaMensagem = {
        id: Date.now().toString(),
        texto: mensagem.trim(),
        data: new Date().toLocaleString(),
      };

      const mensagensSalvas = await AsyncStorage.getItem("mensagens");
      const mensagens = mensagensSalvas ? JSON.parse(mensagensSalvas) : [];

      mensagens.push(novaMensagem);
      await AsyncStorage.setItem("mensagens", JSON.stringify(mensagens));

      Alert.alert("Obrigado!", "Sua mensagem foi salva com sucesso.");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao salvar mensagem:", error);
      Alert.alert("Erro", "Não foi possível salvar sua mensagem.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Title style={styles.title}>Fale com a gente 💬</Title>

        <TextInput
          label="Dúvidas, sugestões ou elogios"
          value={mensagem}
          onChangeText={setMensagem}
          mode="outlined"
          multiline
          numberOfLines={5}
          style={styles.textArea}
          placeholder="Digite sua mensagem aqui..."
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Enviar
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
    textAlign: "center",
    color: "#00796B",
  },
  textArea: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
