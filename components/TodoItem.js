import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
export default function TodoItem({ item, handlePress }) {
  return (
    <View style={styles.card}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => handlePress(item.key)}>
        <AntDesign name="delete" size={24} color="blue" style={styles.iconTr} />
      </TouchableOpacity>
    </View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconTr: {
    alignSelf: "flex-end",
  },
});
