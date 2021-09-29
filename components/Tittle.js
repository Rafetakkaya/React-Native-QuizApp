import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tittle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}  >LET'S START</Text>
        </View>
    )
}

export default Tittle

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        backgroundColor: "white",
        fontSize: 30,
        fontWeight: "bold",
        color: "#cd5c5c",

    },

})
