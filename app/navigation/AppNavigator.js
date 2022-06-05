import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";
import HeaderHome from "../components/HeaderHome";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1C1A31",
          },
        }}
      >
        <Tab.Screen
          name="AudioList"
          component={AudioList}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name="headset"
                  size={25}
                  color={focused ? colors.text : colors.primary}
                />
              );
            },
            headerShown: true,
            header: HeaderHome,
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
                  size={25}
                  color={focused ? colors.text : colors.primary}
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
                  size={25}
                  color={focused ? colors.text : colors.primary}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
