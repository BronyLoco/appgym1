import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

function Exercise2() {
  const brickSizes = {
    standard: { height: 0.09, width: 0.19 },
    large: { height: 0.1, width: 0.2 },
  };

  const [wallHeight, setWallHeight] = useState('');
  const [wallLength, setWallLength] = useState('');
  const [mortarHeight, setMortarHeight] = useState('');
  const [mortarWidth, setMortarWidth] = useState('');
  const [selectedBrick, setSelectedBrick] = useState('');
  const [brickCount, setBrickCount] = useState('');
  const [calculationHistory, setCalculationHistory] = useState([]);

  const handleCalculation = () => {
    if (
      wallHeight === '' ||
      wallLength === '' ||
      selectedBrick === '' ||
      mortarHeight === '' ||
      mortarWidth === ''
    ) {
      alert('Por favor ingrese todas las dimensiones y seleccione el tipo de ladrillo.');
      return;
    }

    const wallArea = parseFloat(wallHeight) * parseFloat(wallLength);
    const mortarHeightMeters = parseFloat(mortarHeight) / 100; // Convertir a metros
    const mortarWidthMeters = parseFloat(mortarWidth) / 100; // Convertir a metros
    const brickArea =
      (brickSizes[selectedBrick].height + mortarHeightMeters) *
      (brickSizes[selectedBrick].width + mortarWidthMeters);
    const bricksNeeded = Math.ceil(wallArea / brickArea);

    setBrickCount(bricksNeeded);
    const calculation = {
      wallHeight: parseFloat(wallHeight),
      wallLength: parseFloat(wallLength),
      mortarHeight: parseFloat(mortarHeight),
      mortarWidth: parseFloat(mortarWidth),
      selectedBrick,
      bricksNeeded,
    };

    setCalculationHistory([calculation, ...calculationHistory]);
  };

  const handleBrickSelection = (brickType) => {
    setSelectedBrick(brickType);
    setBrickCount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LadriCom</Text>
      <Text style={styles.title}>¡Ejercicio 2!</Text>
      <Text style={styles.subtitle}>Calculadora de ladrillos</Text>
      <Text style={styles.description}>
        Calcule con precisión la cantidad de ladrillos para tu pared.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la altura de la pared en metros"
          keyboardType="numeric"
          value={wallHeight}
          onChangeText={setWallHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese la longitud de la pared en metros"
          keyboardType="numeric"
          value={wallLength}
          onChangeText={setWallLength}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese la altura de la junta de mortero en centímetros"
          keyboardType="numeric"
          value={mortarHeight}
          onChangeText={setMortarHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese el ancho de la junta de mortero en centímetros"
          keyboardType="numeric"
          value={mortarWidth}
          onChangeText={setMortarWidth}
        />
        <View style={styles.select}>
          <Button
            title="Ladrillo Estándar"
            onPress={() => handleBrickSelection('standard')}
          />
          <Button
            title="Ladrillo Grande"
            onPress={() => handleBrickSelection('large')}
          />
        </View>
        <Button title="Calcular" onPress={handleCalculation} />
        {brickCount !== '' && (
          <Text style={styles.result}>
            {`Se necesitan ${brickCount} ladrillos de tipo ${selectedBrick}.`}
          </Text>
        )}
      </View>

      <ScrollView style={styles.history}>
        <Text style={styles.historyTitle}>Historial de Cálculos</Text>
        {calculationHistory.map((calculation, index) => (
          <Text key={index} style={styles.historyItem}>
            {`Pared de ${calculation.wallHeight}m x ${calculation.wallLength}m con juntas de mortero de ${calculation.mortarHeight}cm x ${calculation.mortarWidth}cm y ladrillos de tipo ${calculation.selectedBrick}: ${calculation.bricksNeeded} ladrillos`}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4a90e2',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  history: {
    marginTop: 20,
    maxHeight: 200,
  },
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Exercise2;
