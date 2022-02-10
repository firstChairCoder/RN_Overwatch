import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListenNowScreen } from "../screens/ListenNow";
import { LibraryScreen } from "../screens/Library";
import { SearchScreen } from "../screens/Search";
import { PodcastDetailsScreen } from "../screens/PodcastDetails";
import { EpisodeDetailsScreen } from "../screens/EpisodeDetails";

const Stack1 = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();

const MainTab = createBottomTabNavigator();

function ListenNowStack() {
  return (
    <Stack1.Navigator>
      <Stack1.Screen name={"ListenNow"} component={ListenNowScreen} />
    </Stack1.Navigator>
  );
}

function LibraryStack() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name={"Library"} component={LibraryScreen} />
    </Stack2.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack3.Navigator>
      <Stack3.Screen name="Search" component={SearchScreen} />
      <Stack3.Screen name={"PodcastDetails"} component={PodcastDetailsScreen} />
      <Stack3.Screen name={"EpisodeDetails"} component={EpisodeDetailsScreen} />
    </Stack3.Navigator>
  );
}

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name={"Listen"} component={ListenNowStack} />
      <MainTab.Screen name={"Library"} component={LibraryStack} />
      <MainTab.Screen name={"Search"} component={SearchStack} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
