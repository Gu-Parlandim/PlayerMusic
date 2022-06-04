import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="headset"
                size={20}
                color={focused ? "blue" : "#000"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="compact-disc"
                size={20}
                color={focused ? "blue" : "#000"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="my-library-music"
                size={20}
                color={focused ? "blue" : "#000"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
