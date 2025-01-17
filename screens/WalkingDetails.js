import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // Para las barras de progreso
import { Circle } from 'react-native-progress'; // Para el progreso circular

const ProgressBarVertical = ({ progress, label }) => {
  const height = new Animated.Value(0);
  Animated.timing(height, {
    toValue: progress * 100,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.verticalBar}>
      <Text style={styles.barLabel}>{label}</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.verticalProgressBar, { height }]} />
      </View>
    </View>
  );
};

const WalkingDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Building Progress</Text>
      
      <View style={styles.progressContainer}>
        <View style={styles.circularProgressContainer}>
          <Circle
            size={120}
            thickness={15}
            progress={0.89}
            color="#FFA500" // Naranja
            unfilledColor="#444" // Gris oscuro
            strokeCap="round"
          />
          <View style={styles.centeredTextContainer}>
            <Text style={styles.percentText}>89%</Text>
          </View>
        </View>
        <View style={styles.activityDetails}>
          <Text style={styles.activityText}>Total Activity</Text>
          <Text style={styles.activityValue}>15 / 20</Text>
          <Text style={styles.activityText}>Calories Burned</Text>
          <Text style={styles.activityValue}>50 KKal</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>45 / 60 Km</Text>
          <Text style={styles.cardSubtitle}>Calories Burned</Text>
          <Text style={styles.cardValue}>25 KKal</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>21 / 25 hrs</Text>
          <Text style={styles.cardSubtitle}>Calories Burned</Text>
          <Text style={styles.cardValue}>25 KKal</Text>
        </View>
      </View>

      <View style={styles.monitoringContainer}>
        <Text style={styles.monitoringTitle}>Monitoring</Text>
        <Text style={styles.monitoringSubtitle}>Daily progress</Text>

        <View style={styles.verticalBarsContainer}>
          <ProgressBarVertical progress={0.7} label="Running" />
          <ProgressBarVertical progress={0.5} label="Cycling" />
          <ProgressBarVertical progress={0.8} label="Walking" />
        </View>
      </View>

      <View style={styles.daysContainer}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <View key={index} style={styles.dayBox}>
            <Text style={styles.dayLabel}>{day}</Text>
            <ProgressBar progress={(index + 1) * 0.1} color="#FFA500" style={styles.dayProgressBar} />
          </View>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Negro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFA500', // Naranja
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  circularProgressContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText: {
    fontSize: 18,
    color: '#FFA500', // Naranja
    fontWeight: 'bold',
  },
  activityDetails: {
    marginLeft: 20,
  },
  activityText: {
    fontSize: 16,
    color: '#FFA500', // Naranja
  },
  activityValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500', // Naranja
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#444', // Gris oscuro
    padding: 20,
    borderRadius: 10,
    width: '48%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500', // Naranja
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#FFA500', // Naranja
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500', // Naranja
    marginTop: 10,
  },
  monitoringContainer: {
    marginTop: 20,
  },
  monitoringTitle: {
    fontSize: 20,
    color: '#FFA500', // Naranja
    marginBottom: 10,
  },
  monitoringSubtitle: {
    fontSize: 14,
    color: '#FFA500', // Naranja
  },
  verticalBarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  verticalBar: {
    alignItems: 'center',
  },
  barLabel: {
    fontSize: 16,
    color: '#FFA500', // Naranja
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 100,
    width: 20,
    overflow: 'hidden',
    backgroundColor: '#444', // Gris oscuro para el fondo del contenedor
    justifyContent: 'flex-end',
  },
  verticalProgressBar: {
    width: '100%',
    backgroundColor: '#FFA500', // Naranja para la barra
    borderRadius: 5,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  dayBox: {
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 16,
    color: '#FFA500',
  },
  dayProgressBar: {
    width: 40,
    height: 10,
    borderRadius: 5,
  },
});

export default WalkingDetails;
