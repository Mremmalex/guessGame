import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/globalStyles";
const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.inputConfig, ...props.style }} />
  );
};

export default Input;
