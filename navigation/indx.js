import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "../screens/Home"
import Qiz from '../screens/Qiz';
import Rsult from '../screens/Rsult';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Qiz" component={Qiz} options={{ headerShown: false }} />
            <Stack.Screen name="Rsult" component={Rsult} options={{ headerShown: false }} />



        </Stack.Navigator>
    );
}
export default MyStack;


const styles = StyleSheet.create({

})