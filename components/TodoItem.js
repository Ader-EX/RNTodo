import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
export default function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.card}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
    color: "black",
    marginTop: 20,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
  },
});
