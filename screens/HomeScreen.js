import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import chica from '../assets/chica.png'; // Asegúrate de que la imagen esté en esta ubicación

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Pump House</Text>
        <Text style={styles.subtitle}>
          Find out exactly what diet & training will work specifically for you
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RoutineList')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={chica}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7D7D',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  image: {
    
        flex: 1,
        width: '100%',
        height: '70%',
        position: 'absolute',
        bottom: 0,
        resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FF7D7D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
