// RowingDetails.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import rowingImage from '../assets/rowing.jpg'; // Reemplaza con la ruta correcta de la imagen

const RowingDetails = () => {
  return (
    <ImageBackground source={rowingImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Remo</Text>
        <Text style={styles.description}>
          El remo es un ejercicio completo que mejora la fuerza y la resistencia cardiovascular al trabajar todo el cuerpo.
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

export default RowingDetails;
