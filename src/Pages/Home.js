import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Todos from "../Components/Todos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodoCompletion,
  loadTodos,
} from "../Redux/todoSlice";
import TodoForm from "../Components/TodoForm";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    const loadTodosFromStorage = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        dispatch(loadTodos(JSON.parse(storedTodos)));
      }
    };
    loadTodosFromStorage();
  }, [dispatch]);

  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    };
    saveTodos();
  }, [todos]);

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const completedTasks = (id) => {
    dispatch(toggleTodoCompletion(id));
  };

  return (
    <ImageBackground
      source={{ uri: "assets/R.png" }} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            textTransform: "uppercase",
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Todo APP
        </Text>
        <TodoForm />
        <View style={styles.dividerLine}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <TouchableOpacity
            style={[styles.filterBtn, { backgroundColor: "#4CAF50" }]}
            onPress={() => {}}
          >
            <Text style={styles.filterText}>Active Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, { backgroundColor: "#FFC107" }]}
            onPress={() => {}}
          >
            <Text style={styles.filterText}>Completed Tasks</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Todos
            todos={todos}
            deleteTask={deleteTask}
            completedTasks={completedTasks}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
  },
  background: {
    flex: 1,
  },
  dividerLine: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  filterBtn: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Home;
