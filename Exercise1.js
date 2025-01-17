import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

function Exercise1() {
  const exchangeRates = {
    dollar: 10,
    euro: 12,
    argentinePeso: 0.5,
  };

  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);

  const handleConversion = () => {
    if (amount === '') {
      alert('Por favor ingrese un monto para convertir.');
      return;
    }

    if (selectedCurrency === '') {
      alert('Por favor seleccione la moneda para convertir.');
      return;
    }

    const converted = parseFloat(amount) / exchangeRates[selectedCurrency];
    setConvertedAmount(converted.toFixed(2));

    const conversion = {
      amount: parseFloat(amount),
      selectedCurrency,
      convertedAmount: converted.toFixed(2),
    };

    setConversionHistory([conversion, ...conversionHistory]);
  };

  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    setConvertedAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Te lo cambio</Text>
      <Text style={styles.title}>¡Ejercicio 1!</Text>
      <Text style={styles.subtitle}>Cambio de monedas</Text>
      <Text style={styles.description}>
        Cambia tus monedas de bolivianos a dólares, euros y pesos argentinos.
      </Text>

      <View style={styles.row}>
        <View style={[styles.cell, styles.headerCell]}>
          <Text>Bolivianos</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text>Dólares</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text>Euros</Text>
        </View>
        <View style={[styles.cell, styles.headerCell]}>
          <Text>Pesos Argentinos</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1 Boliviano</Text>
        </View>
        <View style={styles.cell}>
          <Text>{`1 Dólar = ${exchangeRates.dollar} Bolivianos`}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{`1 Euro = ${exchangeRates.euro} Bolivianos`}</Text>
        </View>
        <View style={styles.cell}>
          <Text>{`1 Peso Argentino = ${exchangeRates.argentinePeso} Bolivianos`}</Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad en bolivianos"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={styles.select}>
          <Button
            title="Dólar"
            onPress={() => handleCurrencySelection('dollar')}
          />
          <Button
            title="Euro"
            onPress={() => handleCurrencySelection('euro')}
          />
          <Button
            title="Peso Argentino"
            onPress={() => handleCurrencySelection('argentinePeso')}
          />
        </View>
        <Button title="Convertir" onPress={handleConversion} />
        {convertedAmount !== '' && (
          <Text style={styles.result}>
            {`${amount} Bolivianos = ${convertedAmount} ${selectedCurrency.charAt(0).toUpperCase()}${selectedCurrency.slice(1)}`}
          </Text>
        )}
      </View>

      <ScrollView style={styles.history}>
        <Text style={styles.historyTitle}>Historial de Conversiones</Text>
        {conversionHistory.map((conversion, index) => (
          <Text key={index} style={styles.historyItem}>
            {`${conversion.amount} Bolivianos = ${conversion.convertedAmount} ${conversion.selectedCurrency.charAt(0).toUpperCase()}${conversion.selectedCurrency.slice(1)}`}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4a90e2',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  headerCell: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
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
  },
  history: {
    marginTop: 20,
    maxHeight: 200, // Ajusta la altura máxima del historial desplazable
  },
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Exercise1;
