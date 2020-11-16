import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../styles/globalStyles";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;
