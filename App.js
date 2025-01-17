import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
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

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000', // Color de fondo negro
          },
          headerTintColor: '#FFA500', // Color del texto del encabezado (naranja en este caso)
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
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

export default AppNavigator;
