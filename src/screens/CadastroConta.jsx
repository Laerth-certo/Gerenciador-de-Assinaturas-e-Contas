import React, { useState } from "react"; // Importe useState
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert, // Importe Alert para mensagens
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function CadastroConta({ navigation }) { // Removido 'route' se não for usado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o login
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }
    // Lógica de autenticação real viria aqui (ex: API call)
    // Por enquanto, apenas um alerta de sucesso/erro simulado
    if (email === 'teste@teste.com' && password === '123456') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      // navigation.navigate('NomeDaSuaTelaInicialAposLogin'); // Navegar para a tela principal
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
<<<<<<< HEAD
        <Text style={styles.message}>Bem-vindo(a) Gustavo Clay </Text>
=======
        <Text style={styles.message}>Bem-vindo(a)!</Text> {/* Mensagem mais genérica */}
>>>>>>> 0500b8cb5a8ef7484de6af85b0d6859a8edc32e0
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          keyboardType="email-address" // Teclado otimizado para email
          autoCapitalize="none" // Desativa capitalização automática
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.underline} />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          secureTextEntry // Esconde a senha
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.underline} />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    borderBottomWidth: 1, // Adiciona uma linha de borda inferior
    borderBottomColor: '#ccc', // Cor da linha
  },
  underline: {
    // Este estilo pode ser removido agora que o input tem borda inferior
    // height: 1,
    // backgroundColor: "#ccc",
    // marginBottom: 12,
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