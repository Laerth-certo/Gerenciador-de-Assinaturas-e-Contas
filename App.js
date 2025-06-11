import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/DrawerRoutes';
import TelaInicial from './src/screens/TelaInicialScreen';
import HomeScreen from "./src/screens/HomeScreen"
import AssinaturasListScreen from "./src/screens/Assinaturas/AssinaturasListScreen";
import AssinaturaFormScreen from "./src/screens/Assinaturas/AssinaturaFormScreen";
import ContasListScreen from "./src/screens/Contas/ContasListScreen";
import ContaFormScreen from "./src/screens/Contas/ContaFormScreen";
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      
        
          {/* <View style={styles.statusBarBackground} />
        
        <StatusBar style="light" /> */}

       {/*  <View style={styles.container}> */}
         { <DrawerRoutes />}
        
        {/* </View> */}

      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 24, 
    backgroundColor: '#38A69D',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
