import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';

// Importa tus imágenes de rutinas aquí
import cardioImage from '../assets/card.jpg'; // Reemplaza con la ruta correcta
import strengthImage from '../assets/fuerza.jpg'; // Reemplaza con la ruta correcta
import flexibilityImage from '../assets/flexi.jpg'; // Reemplaza con la ruta correcta
import headerImage from '../assets/header.jpg'; // Reemplaza con la ruta correcta

const routines = [
    { id: '1', name: 'Cardio Blast', duration: '30 min', image: cardioImage, screen: 'CardioDetails' },
    { id: '2', name: 'Strength Training', duration: '45 min', image: strengthImage, screen: 'StrengthDetails' },
    { id: '3', name: 'Flexibility Flow', duration: '20 min', image: flexibilityImage, screen: 'FlexibilityDetails' },
];

const RoutineListScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.screen)}
        >
            <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.imageStyle}>
                <View style={styles.textOverlay}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.duration}>{item.duration}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Image source={headerImage} style={styles.headerImage} />
            <FlatList
                data={routines}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Fondo negro
    },
    headerImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    list: {
        padding: 20,
    },
    item: {
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageBackground: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
    },
    imageStyle: {
        borderRadius: 10,
    },
    textOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente más oscuro
        padding: 10,
    },
    name: {
        fontSize: 18,
        color: '#FFA500', // Texto en naranja
        fontWeight: 'bold',
    },
    duration: {
        fontSize: 14,
        color: '#FFA500', // Texto en naranja
    },
});

export default RoutineListScreen;
