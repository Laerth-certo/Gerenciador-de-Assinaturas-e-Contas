import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/DrawerRoutes';
import ClienteLista from './src/screens/Clientes/ClienteLista';
import ClienteForm from './src/screens/Clientes/ClienteForm';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={styles.statusBarBackground} />
        <StatusBar style="light" />
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}

<Stack.Navigator>
  <Stack.Screen name="ClienteLista" component={ClienteLista} />
  <Stack.Screen name="ClienteForm" component={ClienteForm} />
</Stack.Navigator>

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 24,
    backgroundColor: '#38A69D',
  },
});
