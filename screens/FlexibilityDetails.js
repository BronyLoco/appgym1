import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexibilityDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flexibility Flow</Text>
            <Text style={styles.detail}>Duración: 20 min</Text>
            <Text style={styles.detail}>Estiramientos aconsejables: 10 seg por posición</Text>
            <Text style={styles.detail}>Calorías quemadas estimadas: 150</Text>
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

export default FlexibilityDetails;
