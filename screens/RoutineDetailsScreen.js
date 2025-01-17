import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoutineDetailsScreen = ({ route }) => {
  const { routine } = route.params;

  // Ejemplo de datos, puedes ajustarlos según lo necesites
  const exerciseData = {
    time: routine.duration,
    caloriesBurned: '300 kcal', // Valor ficticio, ajusta según tu lógica
    recommendedSpeed: '6 mph', // Velocidad aconsejable ficticia
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routine.name} Details</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Time: {exerciseData.time}</Text>
        <Text style={styles.stat}>Calories Burned: {exerciseData.caloriesBurned}</Text>
        <Text style={styles.stat}>Recommended Speed: {exerciseData.recommendedSpeed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF7D7D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  stat: {
    fontSize: 18,
    marginVertical: 5,
    color: '#FF7D7D',
  },
});

export default RoutineDetailsScreen;
