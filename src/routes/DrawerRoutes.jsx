import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

import TabRoutes from "./TabRoutes";
import CadastroConta from "../screens/CadastroConta";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroDuvidas from "../screens/CadastroDuvidas";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen 
        name="Perfil" 
        component={HomeScreen}
        options={{
          title: 'Meu Perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      /> */}

      {/*  <Drawer.Screen 
        name="Inicio" 
        component={HomeScreen}
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      /> */}

      <Drawer.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{
          title: "Gerenciador de Contas",
          
        }}
      />
      <Drawer.Screen
      name="CadastroConta"
      component={CadastroConta}
      
      />
      <Drawer.Screen
      name="CadastroScreen"
      component={CadastroScreen}
      />
      
      
      <Drawer.Screen
      name="CadastroDuvidas"
      component={CadastroDuvidas}
      />



  
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
