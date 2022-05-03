import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 30, //30px from the top of the screen
    left: 10, //10px from the left of the screen
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 3,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto", // will move to bottom, maximizing the margin on top.
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
