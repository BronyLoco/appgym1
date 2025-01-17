import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StrengthDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Strength Training</Text>
            <Text style={styles.detail}>Duración: 45 min</Text>
            <Text style={styles.detail}>Peso aconsejable: 70% del máximo</Text>
            <Text style={styles.detail}>Calorías quemadas estimadas: 400</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default StrengthDetails;
