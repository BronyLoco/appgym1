// CyclingDetails.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import cyclingImage from '../assets/cycling.jpg'; // Reemplaza con la ruta correcta de la imagen

const CyclingDetails = () => {
  return (
    <ImageBackground source={cyclingImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Montar en Bicicleta</Text>
        <Text style={styles.description}>
          Montar en bicicleta es una actividad divertida y eficaz para mejorar la salud cardiovascular y muscular.
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

export default CyclingDetails;
