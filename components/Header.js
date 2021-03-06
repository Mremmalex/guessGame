import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../styles/globalStyles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;
