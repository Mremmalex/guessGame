import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles/globalStyles";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
}

const ScopedStyles = StyleSheet.create({});
