import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

import TabRoutes from "./TabRoutes";

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
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
