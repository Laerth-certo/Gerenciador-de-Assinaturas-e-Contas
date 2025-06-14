import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import CadastroService from './CadastroService';

export default function ListarContas({ navigation }) {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    buscarContas();
  }, []);

  async function buscarContas() {
    const lista = await CadastroService.listar();
    setContas(lista);
  }

  async function removerConta(id) {
    await CadastroService.remover(id);
    alert('Conta excluída com sucesso!!!');
    buscarContas();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {contas.map((conta) => (
        <Card key={conta.id} style={styles.card}>
          <Card.Title title={conta.nome} subtitle={conta.email} />
          <Card.Content>
            <Text>Tipo: {conta.tipoAssinatura}</Text>
            <Text>Pagamento: {conta.formaPagamento}</Text>
            <Text>Vencimento: {conta.dataVencimento}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('CadastroScreen', conta)}>Editar</Button>
            <Button onPress={() => removerConta(conta.id)}>Excluir</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});
