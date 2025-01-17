// SprintsDetails.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import sprintsImage from '../assets/sprints.jpg'; // Reemplaza con la ruta correcta de la imagen

const SprintsDetails = () => {
  return (
    <ImageBackground source={sprintsImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Sprints</Text>
        <Text style={styles.description}>
          Los sprints son una excelente forma de mejorar la velocidad, la fuerza explosiva y la capacidad cardiovascular en un corto periodo de tiempo.
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

export default SprintsDetails;
