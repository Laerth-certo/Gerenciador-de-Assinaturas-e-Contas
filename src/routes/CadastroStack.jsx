import { createStackNavigator } from "@react-navigation/stack";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroConta from "../screens/CadastroConta";
import CadastroDuvidas from "../screens/CadastroDuvidas";

const Stack = createStackNavigator();

export default function CadastroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      <Stack.Screen name="CadastroConta" component={CadastroConta} />
      <Stack.Screen name="CadastroDuvidas" component={CadastroDuvidas} />
    </Stack.Navigator>
  );
}
