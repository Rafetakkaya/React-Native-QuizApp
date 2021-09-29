import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Rsult = ({ navigation }) => {
    return (
        <View >

            <View style={styles.bannerContainer}>
                <Image source={{ uri: "https://squashdynamics.com/wp-content/uploads/2021/04/Quiz-Logo-300x200-1.jpg" }} style={styles.banner} resizeMode="contain" />

            </View>
            <View >
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {

        backgroundColor: "white",
        height: 280,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%"
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

export default Rsult;
