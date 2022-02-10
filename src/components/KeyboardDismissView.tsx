import type { FC } from "react";
import React from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: FC<Props> = ({ withScrollView, children }) => {
  if (withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps={"never"}
        contentContainerStyle={styles.container}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      {children}
    </TouchableOpacity>
  );
};

export default KeyboardDismissView;
