import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tabs = ({ onTabChange }) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange("Pomodoro")}
      >
        <Text style={styles.tabText}>Pomodoro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange("Short Break")}
      >
        <Text style={styles.tabText}>Short Break</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabChange("Long Break")}
      >
        <Text style={styles.tabText}>Long Break</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Tabs;
