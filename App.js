import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    a;
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Todo List</Text>
        <Text style={styles.title}>{todos.length}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Checkbox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text
              style={toggleCheckBox&&item.completed ? styles.completedText : styles.todoText}
              onPress={() => toggleTodo(index)}
            >
              {item.text}
            </Text>
            <Button
              title="Delete"
              color="red"
              onPress={() => deleteTodo(index)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    gap: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
});
