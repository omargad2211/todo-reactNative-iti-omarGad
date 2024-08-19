import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const navigation = useNavigation();
  const { todo } = useRoute().params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.comment}>{todo.comment}</Text>
        <Text
          style={[
            styles.status,
            todo.isCompleted ? styles.completed : styles.active,
          ]}
        >
          Status: {todo.isCompleted ? "Completed" : "Active"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  detailContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  comment: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
  active: {
    color: "green",
  },
  completed: {
    color: "red",
    textDecorationLine: "line-through",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TodoDetails;
