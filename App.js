import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MyStack from "./navigation/indx";
import Home from "./screens/Home";
import Qiz from "./screens/Qiz";
import Rsult from "./screens/Rsult";

const App = () => {
  return (

    <NavigationContainer >
      <MyStack />
    </NavigationContainer>




  )
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    padding: 40,
    paddingHorizontal: 16,

  },



})