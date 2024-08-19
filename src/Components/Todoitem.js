import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoCompletion } from "../Redux/todoSlice";

const TodoItem = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleComplete = () => {
    dispatch(toggleTodoCompletion(todo.id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Todo Details", { todo })}
        activeOpacity={0.5}
        style={styles.textContainer}
      >
        <Text style={[styles.title, todo.isCompleted && styles.completed]}>
          {todo.title}
        </Text>
        <Text style={[styles.comment, todo.isCompleted && styles.completed]}>
          {todo.description}
        </Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleComplete}>
          <AntDesign
            name={todo.isCompleted ? "checksquare" : "checksquareo"}
            size={20}
            color="green"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  comment: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default TodoItem;
