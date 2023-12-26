import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "#2196F3",
  },
  title: {
    paddingLeft: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
