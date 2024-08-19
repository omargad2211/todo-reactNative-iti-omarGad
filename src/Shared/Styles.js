import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingBottom: 20,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  active: {
    backgroundColor: "black",
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    textDecorationLine: "line-through",
  },
  todoTitle: {
    fontSize: 18,
    color: "black",
  },
  todoDescription: {
    color: "gray",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  todoContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  scrollable: { width: "90%" },
});
