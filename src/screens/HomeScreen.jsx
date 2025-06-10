import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

// Telas (você pode adicionar mais depois)
function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../doc/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.title}>
          Faça o login para começar
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')} // Aqui redireciona para outra tela
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

// Tela de destino após o login
function DashboardScreen() {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={{ fontSize: 22, color: '#FFF' }}>Bem-vindo ao Dashboard!</Text>
    </View>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Tela Inicial",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
