import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Qiz = ({ navigation }) => {
    const [question, setquestion] = useState();
    const [ques, seQues] = useState(0);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data.results[0]);
        setquestion(data.results);

    }
    useEffect(() => {
        getQuiz();
    }, [])
    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.questio}>Q.Imagine ths is a really cool qustion</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Cool Option 1</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Cool Option 1</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Cool Option 1</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>Cool Option 1</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Rsult")} style={styles.button}>
                    <Text style={styles.buttonText}>END</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} >NEXT</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal: 30,
        height: "100%",



    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,

    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row",

    },
    button: {

        backgroundColor: "#ff6a6a",
        padding: 12,
        borderRadius: 30,
        alignItems: "center",
        marginBottom: 30,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    questio: {
        fontSize: 25,
    },
    option: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#ff6a6a",
        paddingHorizontal: 12,
        borderRadius: 20,

    },
})

export default Qiz;
