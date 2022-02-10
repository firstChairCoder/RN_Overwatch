import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const EpisodeDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Episode</Text>
    </View>
  );
};
