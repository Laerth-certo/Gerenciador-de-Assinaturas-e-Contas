import { createStackNavigator } from "@react-navigation/stack";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroConta from "../screens/CadastroConta";
import MensagemScreen from "../screens/MensagemScreen"
import ClienteForm from "../screens/Clientes/ClienteForm"
import ClienteLista from "../screens/Clientes/ClienteLista";
import ClienteService from "../screens/ClienteService";

const Stack = createStackNavigator();

export default function CadastroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      <Stack.Screen name="CadastroConta" component={CadastroConta} />
      <Stack.Screen name="MensagemScreen" component={MensagemScreen} />
    </Stack.Navigator>
  );
}
