import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

//importing global styles
import styles from "../styles/globalStyles";

const GameOver = ({ roundsNumber, userNumber, startNewGAme }) => {
  return (
    <View style={scopeedStyle.screen}>
      <Text>Game is over</Text>
      <Text>Number Of Rounds: {roundsNumber}</Text>
      <Text>Number Was: {userNumber}</Text>
      <Button title=" Start New Game" onPress={startNewGAme} />
    </View>
  );
};

const scopeedStyle = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
