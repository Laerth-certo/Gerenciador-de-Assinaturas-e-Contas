import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Title, Card } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MensagensScreen() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const carregarMensagens = async () => {
      try {
        const mensagensSalvas = await AsyncStorage.getItem("mensagens");
        const mensagensParseadas = mensagensSalvas ? JSON.parse(mensagensSalvas) : [];
        setMensagens(mensagensParseadas.reverse()); // Exibe as mais recentes primeiro
      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
      }
    };

    const unsubscribe = carregarMensagens();
    return () => unsubscribe;
  }, []);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.data}>{item.data}</Text>
        <Text>{item.texto}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Mensagens Recebidas</Title>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma mensagem encontrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2fdfb",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#00796B",
  },
  card: {
    marginBottom: 12,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 8,
  },
  data: {
    fontSize: 12,
    color: "#888",
    marginBottom: 6,
  },
  vazio: {
    marginTop: 50,
    textAlign: "center",
    color: "#777",
  },
});
