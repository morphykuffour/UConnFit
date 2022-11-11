import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
// import "./App.css";
import Signup from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <text>
      <Signup />
      <Login />
      </text>
      <StatusBar style="auto" />
    </View>
  );
}

// TODO move styling to seprate file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
