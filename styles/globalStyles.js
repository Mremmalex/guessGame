import { StyleSheet } from "react-native";

let primaryColor = "#000";
let secondaryColor = "#fff";
let accentColor = "#f7287b";
let highLight = "#c717fc";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  textColor: {
    color: secondaryColor,
  },
  header: {
    width: "100%",
    height: 80,
    paddingTop: 20,
    backgroundColor: accentColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: primaryColor,
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  card: {
    shadowColor: primaryColor,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    shadowRadius: 8,
    shadowOpacity: 1,
    backgroundColor: secondaryColor,
    padding: 20,
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  btn: {
    width: 100,
  },
  inputConfig: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  sumaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  container: {
    borderWidth: 2,
    borderColor: accentColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Number: {
    color: accentColor,
    fontSize: 22,
  },
});

export default styles;
export { primaryColor, secondaryColor, highLight, accentColor };
