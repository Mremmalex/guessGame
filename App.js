import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles/globalStyles";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import GameOver from "./screen/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);

  const startNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const gameOverHandler = (numRounds) => {
    setGuessRounds(numRounds);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        startNewGame={startNewGame}
        roundsNumber={guessRounds}
        userNumber={userNumber}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const ScopedStyles = StyleSheet.create({});
