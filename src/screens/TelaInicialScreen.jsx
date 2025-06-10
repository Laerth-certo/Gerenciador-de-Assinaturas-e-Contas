import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../doc/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Exemplo de texto e botão */}
      <Text style={styles.title}>Bem-vindo ao App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#38A69D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});