import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from "react";
export default function TodoItem({ handleAdd }) {
  const [text, setText] = useState("");
  const changeTextHandler = (e) => {
    setText(e);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add to do...."
        onChangeText={changeTextHandler}
      />
      <Button
        title="Submit"
        style={styles.button}
        onPress={() => handleAdd(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    marginBottom: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
    backgroundColor: "#2196F3",
  },
});
