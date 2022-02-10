import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const PodcastDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Podcast</Text>
    </View>
  );
};
