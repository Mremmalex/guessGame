import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import styles, { highLight, accentColor } from "../styles/globalStyles";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={ScopedStyles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <Input
          maxLength={2}
          autoCorrect={false}
          keyboardType="numeric"
          autoCapitalize="none"
          blurOnSubmit
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Reset" onPress={() => {}} color={highLight} />
          </View>
          <View style={styles.btn}>
            <Button title="Confirm" onPress={() => {}} color={accentColor} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const ScopedStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default StartGameScreen;
