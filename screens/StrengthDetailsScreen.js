import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Importa la imagen de fondo aquí
import strengthImage from '../assets/strength.png'; // Reemplaza con la ruta correcta

const StrengthDetails = () => {
  return (
    <ImageBackground source={strengthImage} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Entrenamiento de Fuerza</Text>
        <Text style={styles.detail}>Duración: 45 min</Text>
        <Text style={styles.detail}>Peso aconsejable: 70% del máximo</Text>
        <Text style={styles.detail}>Calorías quemadas estimadas: 400</Text>
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

export default StrengthDetails;
