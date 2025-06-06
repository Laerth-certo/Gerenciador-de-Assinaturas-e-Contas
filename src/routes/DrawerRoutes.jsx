import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabRouter } from "@react-navigation/native";
import TabRoutes from "./TabRoutes";
import { Ionicons } from "@expo/vector-icons";


export default function DrawerRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          title: "Tela Inicial",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
