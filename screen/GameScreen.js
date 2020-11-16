import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

import styles from "../styles/globalStyles";
import NumberComponent from "../components/numberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (min - max)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setcurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);

  const nextGuessDirection = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is  wrong ", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentLow.current = currentGuess;
    } else {
      currentHigh.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setcurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  React.useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={ScopedStyle.screen}>
      <Text>Opponent's Guess</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card style={styles.buttonContainer2}>
        <Button
          title="LOWER"
          onPress={nextGuessDirection.bind(this, "lower")}
        />
        <Button
          title="GREATER"
          onPress={nextGuessDirection.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const ScopedStyle = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default GameScreen;
