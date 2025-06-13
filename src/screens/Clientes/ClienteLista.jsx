import { useEffect, useState, useCallback } from 'react'; // Importar useCallback
import { FlatList, StyleSheet, View, Alert } from 'react-native'; // Importar Alert
import { Button, Card, Text } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native'; // Importar useFocusEffect
import ClienteService from '../ClienteService'

export default function ClienteLista({ navigation, route }) {
  const [clientes, setClientes] = useState([]);

  // Usar useFocusEffect para recarregar dados sempre que a tela entrar em foco
  useFocusEffect(
    useCallback(() => {
      buscarClientes();
    }, [])
  );

  async function buscarClientes() {
    try {
      const listaClientes = await ClienteService.listar();
      setClientes(listaClientes);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      Alert.alert("Erro", "Não foi possível carregar a lista de clientes.");
    }
  }

  async function confirmarRemocao(id) {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja remover este cliente?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Remover",
          onPress: () => removerCliente(id),
          style: "destructive" // Para iOS, destaca a ação destrutiva
        }
      ],
      { cancelable: true } // Permite fechar o alerta tocando fora dele
    );
  }

  async function removerCliente(id) {
    try {
      await ClienteService.remover(id);
      Alert.alert('Sucesso', 'Cliente excluído com sucesso!'); // Usar Alert ao invés de alert
      buscarClientes(); // Recarrega a lista após a remoção
    } catch (error) {
      console.error("Erro ao remover cliente:", error);
      Alert.alert("Erro", "Não foi possível remover o cliente.");
    }
  }

  return (
    <View style={styles.container}> 
      <Button
        style={styles.button} 
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('ClienteForm')}
      >
        Cadastrar Novo Cliente
      </Button>

      <FlatList
        data={clientes}
        // keyExtractor ajuda o React a identificar itens de forma única
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant='titleMedium'>**ID:** {item.id}</Text> {/* Usando variant para estilo */}
              <Text variant='titleMedium'>**Nome:** {item.nome}</Text>
              <Text variant='bodyMedium'>**CPF:** {item.cpf}</Text>
              <Text variant='bodyMedium'>**Email:** {item.email}</Text>
              {/* Adicionar outros campos aqui se desejar */}
              <Text variant='bodyMedium'>**Telefone:** {item.telefone}</Text>
              <Text variant='bodyMedium'>**Nascimento:** {item.dataNascimento}</Text>
              <Text variant='bodyMedium'>**Tipo Assinatura:** {item.tipoAssinatura}</Text>
              <Text variant='bodyMedium'>**Vencimento:** {item.dataVencimento}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon='pencil' onPress={() => navigation.navigate('ClienteForm', item)}>Editar</Button>
              <Button icon='delete' onPress={() => confirmarRemocao(item.id)}>Remover</Button>
            </Card.Actions>
          </Card>
        )}
        // Adicionar um Text para quando a lista estiver vazia
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>Nenhum cliente cadastrado ainda.</Text>
          </View>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Adiciona um padding geral
    backgroundColor: '#f5f5f5', // Um fundo claro para o container
  },
  button: {
    marginTop: 10,
    marginBottom: 10, // Adiciona margem abaixo do botão
    marginHorizontal: 10, // Alinha o botão com os cards
  },
  card: {
    marginVertical: 8, // Margem vertical entre os cards
    marginHorizontal: 10, // Margem horizontal
    elevation: 3, // Sombra para Android
    shadowOffset: { width: 1, height: 1 }, // Sombra para iOS
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 8, // Bordas arredondadas
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyListText: {
    fontSize: 18,
    color: 'gray',
  },
});