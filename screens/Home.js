import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Tittle from '../components/Tittle';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Tittle />
            <View style={styles.bannerContainer}>
                <Image source={{ uri: "https://squashdynamics.com/wp-content/uploads/2021/04/Quiz-Logo-300x200-1.jpg" }} style={styles.banner} resizeMode="contain" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Qiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "white",
        height: "100%",

    },
    banner: {
        height: 400,
        width: 400,
    },
    bannerContainer: {
        flex: 1,
        backgroundColor: "white",
        height: 280,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "100%",
        backgroundColor: "#cd5c5c",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "white",

    },
})

export default Home;
