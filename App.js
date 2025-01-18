import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RoutineListScreen from './screens/RoutineListScreen';
import CardioDetails from './screens/CardioDetails';
import StrengthDetails from './screens/StrengthDetailsScreen';
import FlexibilityDetails from './screens/FlexibilityDetails';
import ContactScreen from './screens/ContactScreen';
import WalkingDetails from './screens/WalkingDetails';
import RunningDetails from './screens/RunningDetails';
import CyclingDetails from './screens/CyclingDetails';
import JumpingRopeDetails from './screens/JumpingRopeDetails';
import RowingDetails from './screens/RowingDetails';
import SprintsDetails from './screens/SprintsDetails';
import logo from './assets/logo.png'; // Asegúrate de que el logo esté en esta ubicación

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomeScreen(false);
    }, 6000); // Duración de la pantalla de inicio (6 segundos en este caso)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 6000, // Duración de la animación de 6 segundos
      useNativeDriver: true,
    }).start();
  }, [logoOpacity]);

  if (showHomeScreen) {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={logo}
          style={[styles.logo, { opacity: logoOpacity }]}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#FFA500',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: { backgroundColor: 'black' }, // Fondo negro durante las transiciones
        }}
      >
        <Stack.Screen name="RoutineList" component={RoutineListScreen} />
        <Stack.Screen name="CardioDetails" component={CardioDetails} />
        <Stack.Screen name="StrengthDetails" component={StrengthDetails} />
        <Stack.Screen name="FlexibilityDetails" component={FlexibilityDetails} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="WalkingDetails" component={WalkingDetails} />
        <Stack.Screen name="RunningDetails" component={RunningDetails} />
        <Stack.Screen name="CyclingDetails" component={CyclingDetails} />
        <Stack.Screen name="JumpingRopeDetails" component={JumpingRopeDetails} />
        <Stack.Screen name="RowingDetails" component={RowingDetails} />
        <Stack.Screen name="SprintsDetails" component={SprintsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // El color de fondo sigue siendo negro
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%', // El logo ocupará toda la pantalla
    height: '100%', // El logo ocupará toda la pantalla
    resizeMode: 'contain', // Ajustar la imagen manteniendo la relación de aspecto
  },
});

export default AppNavigator;
