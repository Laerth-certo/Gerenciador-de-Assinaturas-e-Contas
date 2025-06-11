import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroConta from "../screens/CadastroConta";
import HomeScreen from "../screens/HomeScreen"

 const Tab = createBottomTabNavigator();

export default function TabRoutes() {
 

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
    
    name="HomeScreen"
    component={HomeScreen}
    />
      <Tab.Screen
        name="Cadastro de Assinatura"
        component={CadastroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Acesse a sua Conta"
        component={CadastroConta}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
