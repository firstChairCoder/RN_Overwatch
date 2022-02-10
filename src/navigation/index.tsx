import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Tabs"} component={MainTabNavigator} />
    </Stack.Navigator>
  );
};
