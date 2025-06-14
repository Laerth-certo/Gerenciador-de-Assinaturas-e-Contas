import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function CadastroConta({ navigation,route}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a) Gustavo Clay </Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />
        <View style={styles.underline} />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.underline} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("CadastroScreen")}
        >
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    height: 40,
    fontSize: 16,
    marginBottom: 4,
  },
  underline: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 14,
    alignSelf: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  registerText: {
    color: "#a1a1a1",
    fontSize: 14,
  },
});
