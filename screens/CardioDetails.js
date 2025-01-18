import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// Importa tus imágenes aquí
import walkingImage from '../assets/walking.jpg'; // Reemplaza con la ruta correcta
import runningImage from '../assets/running.jpg'; // Reemplaza con la ruta correcta
import cyclingImage from '../assets/cycling.jpg'; // Reemplaza con la ruta correcta
import jumpingRopeImage from '../assets/jumping_rope.jpg'; // Reemplaza con la ruta correcta
import rowingImage from '../assets/rowing.jpg'; // Reemplaza con la ruta correcta
import sprintsImage from '../assets/sprints.jpg'; // Reemplaza con la ruta correcta

const activities = [
  { name: 'Caminar a paso ligero', image: walkingImage, screen: 'WalkingDetails' },
  { name: 'Correr', image: runningImage, screen: 'RunningDetails' },
  { name: 'Montar en bicicleta', image: cyclingImage, screen: 'CyclingDetails' },
  { name: 'Saltar a la comba', image: jumpingRopeImage, screen: 'JumpingRopeDetails' },
  { name: 'Remo', image: rowingImage, screen: 'RowingDetails' },
  { name: 'Sprints', image: sprintsImage, screen: 'SprintsDetails' },
];

const CardioDetails = ({ navigation }) => {
  const renderActivity = (activity) => (
    <TouchableOpacity
      key={activity.name}
      style={styles.activityBox}
      onPress={() => navigation.navigate(activity.screen)}
    >
      <ImageBackground source={activity.image} style={styles.activityImage} imageStyle={styles.imageStyle}>
        <View style={styles.textOverlay}>
          <Text style={styles.activityName}>{activity.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {activities.map(renderActivity)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black', // Fondo de la ventana en negro
  },
  activityBox: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'orange', // Borde naranja alrededor de cada caja de actividad
  },
  activityImage: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  textOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajuste del fondo de la superposición de texto para mayor visibilidad
    padding: 10,
  },
  activityName: {
    fontSize: 18,
    color: 'orange', // Texto en naranja
    fontWeight: 'bold',
    textAlign: 'center', // Centrar el texto
  },
});

export default CardioDetails;
