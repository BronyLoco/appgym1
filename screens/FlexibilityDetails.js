import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Importa la imagen de fondo aquí
import flexibilityImage from '../assets/Flexibility.png'; // Reemplaza con la ruta correcta

const FlexibilityDetails = () => {
  return (
    <ImageBackground source={flexibilityImage} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Flexibilidad Flow</Text>
        <Text style={styles.detail}>Duración: 20 min</Text>
        <Text style={styles.detail}>Estiramientos aconsejables: 10 seg por posición</Text>
        <Text style={styles.detail}>Calorías quemadas estimadas: 150</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Superposición negra para mejorar la legibilidad del texto
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para el contenido
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orange', // Texto en naranja
    marginBottom: 20,
  },
  detail: {
    fontSize: 20,
    color: 'white', // Texto en blanco
    marginVertical: 5,
  },
});

export default FlexibilityDetails;
