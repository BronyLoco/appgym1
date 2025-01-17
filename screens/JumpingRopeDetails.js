// JumpingRopeDetails.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import jumpingRopeImage from '../assets/jumping_rope.jpg'; // Reemplaza con la ruta correcta de la imagen

const JumpingRopeDetails = () => {
  return (
    <ImageBackground source={jumpingRopeImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Saltar a la Cuerda</Text>
        <Text style={styles.description}>
          Saltar a la cuerda es una actividad cardiovascular intensa que mejora la coordinación y la resistencia.
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

export default JumpingRopeDetails;
