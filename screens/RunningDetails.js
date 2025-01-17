// RunningDetails.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import runningImage from '../assets/running.jpg'; // Reemplaza con la ruta correcta de la imagen

const RunningDetails = () => {
  return (
    <ImageBackground source={runningImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Correr</Text>
        <Text style={styles.description}>
          Correr es un ejercicio cardiovascular intensivo que ayuda a mejorar la resistencia y la salud cardiovascular.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});

export default RunningDetails;
