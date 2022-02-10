import React from "react";
import { Box, Text } from "react-native-design-utility";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    backgroundColor: theme.color.grayLightest,
    paddingHorizontal: theme.space.s,
    borderRadius: 10,
    fontSize: theme.text.size.m,
  },
  list: {
    minHeight: "100%",
  },
});

export const SearchScreen = () => {
  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="s" my="s">
        <Box
          dir="row"
          align="center"
          h={40}
          bg="grayLightest"
          radius={10}
          px="s"
        >
          <Box mr={10}>
            <Feather name="search" size={20} color={theme.color.grayDark} />
          </Box>
          <TextInput
            style={styles.input}
            placeholder="Search Podcast"
            selectionColor={theme.color.blueLight}
          />
        </Box>

        <FlatList
          style={styles.list}
          data={[{ id: 1 }, { id: 2 }]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => (
            <Box dir="row" h={90} align="center" px="s">
              <Box h={70} w={70} bg="blueLight" radius={10} mr={10} />
              <Box>
                <Text bold>Joe Rogan</Text>
                <Text size="xs" color="gray">
                  This is the subtitle
                </Text>
                <Text size="xs" color="blueLight">
                  400 episodes
                </Text>
              </Box>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};
