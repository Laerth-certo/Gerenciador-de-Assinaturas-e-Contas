import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, Text, TextInput } from 'react-native-paper';
import ClienteService from '../ClienteService'; // Verifique o caminho correto para ClienteService

export default function ClienteForm({ navigation, route }) {
  const clienteAntigo = route.params || {};

  const [nome, setNome] = useState(clienteAntigo.nome || "");
  const [cpf, setCpf] = useState(clienteAntigo.cpf || "");
  const [email, setEmail] = useState(clienteAntigo.email || "");
  const [telefone, setTelefone] = useState(clienteAntigo.telefone || "");
  const [dataNascimento, setDataNascimento] = useState(clienteAntigo.dataNascimento || "");
  const [tipoAssinatura, setTipoAssinatura] = useState(clienteAntigo.tipoAssinatura || "");
  const [dataVencimento, setDataVencimento] = useState(clienteAntigo.dataVencimento || ""); // Corrigido para dataVencimento

  async function salvar() {
    let cliente = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento,
      tipoAssinatura, // <<< Adicionado vírgula aqui
      dataVencimento
    };

    // Validação de todos os campos
    if (!cliente.nome || !cliente.cpf || !cliente.email || !cliente.dataNascimento || !cliente.telefone || !cliente.tipoAssinatura || !cliente.dataVencimento) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try { // Adicionado try-catch para lidar com erros do serviço
      if (clienteAntigo.id) {
        // ALTERANDO UM CLIENTE EXISTENTE
        cliente.id = clienteAntigo.id;
        await ClienteService.atualizar(cliente);
        alert("Cliente alterado com sucesso!");
      } else {
        // CADASTRANDO UM NOVO CLIENTE
        await ClienteService.salvar(cliente);
        alert("Cliente cadastrado com sucesso!");
      }

      // Redireciona para a lista de clientes após salvar/atualizar
      navigation.reset({
        index: 0,
        routes: [{ name: 'ClienteLista' }]
      });

    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      alert("Ocorreu um erro ao salvar o cliente. Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados do Cliente:</Text>

      {/* Exibindo o ID do cliente (se houver) */}
      <Text variant='titleLarge'>ID CLIENTE: {clienteAntigo.id || 'NOVO'}</Text>

      {/* Campos de Input */}
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
        placeholder='Ex: Premium, Básico, Anual'
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

      {/* Botão Salvar */}
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