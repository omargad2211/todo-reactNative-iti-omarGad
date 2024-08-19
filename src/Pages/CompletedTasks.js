import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { loadTodos, toggleTodoCompletion } from "../Redux/todoSlice";

const image = { uri: "../../assets/background.jpg" };

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.isCompleted)
  );

  useEffect(() => {
    const loadCompletedTodos = async () => {
    };
    loadCompletedTodos();
  }, [dispatch]);

  const handleToggleCompletion = (id) => {
    dispatch(toggleTodoCompletion(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <View style={styles.textContainer}>
        <Text style={styles.todoTitle}>{item.title}</Text>
        <Text style={styles.todoComment}>{item.description}</Text>
        <Text style={styles.todoStatus}>
          Status: {item.isCompleted ? "Completed" : "Pending"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleToggleCompletion(item.id)}
      >
        <AntDesign name="checkcircle" size={20} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.header}>Completed Tasks</Text>
        {completedTodos.length > 0 ? (
          <FlatList
            data={completedTodos}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        ) : (
          <Text style={styles.noTasks}>No completed tasks</Text>
        )}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  todoItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  todoComment: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "line-through",
  },
  todoStatus: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
  iconContainer: {
    marginLeft: 10,
  },
  noTasks: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    flex: 1,
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CompletedTasks;
