import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import styles, { highLight, accentColor } from "../styles/globalStyles";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberComponent from "../components/numberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "The Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedOuput;
  if (confirmed) {
    confirmedOuput = (
      <Card style={styles.sumaryContainer}>
        <Text>You Selected </Text>
        <NumberComponent>{selectedNumber}</NumberComponent>
        <Button
          onPress={() => props.onStartGame(selectedNumber)}
          title="START GAME"
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
            onChangeText={inputHandler}
            value={enteredValue}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={highLight}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={accentColor}
              />
            </View>
          </View>
        </Card>
        {confirmedOuput}
      </View>
    </TouchableWithoutFeedback>
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
