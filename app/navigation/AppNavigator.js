import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import HeaderHome from "../components/HeaderHome";
import TabBarLabel from "../components/TabBarLabel";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#1C1A31",
          },
        }}
      >
        <Tab.Screen
          name="Lista de musica"
          component={AudioList}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="music-box-multiple"
                  size={25}
                  color={focused ? colors.text : colors.primary}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <TabBarLabel
                  color={focused ? colors.text : colors.primary}
                  text={"Lista de musica"}
                  size="10px"
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
            tabBarLabel: ({ focused }) => {
              return (
                <TabBarLabel
                  color={focused ? colors.text : colors.primary}
                  text={"Player"}
                  size="10px"
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
                <MaterialCommunityIcons
                  name="playlist-music"
                  size={35}
                  color={focused ? colors.text : colors.primary}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <TabBarLabel
                  color={focused ? colors.text : colors.primary}
                  text="PlayList"
                  size="10px"
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Favoritas"
          component={PlayList}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  name="heart"
                  size={25}
                  color={focused ? colors.text : colors.primary}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <TabBarLabel
                  color={focused ? colors.text : colors.primary}
                  text="Favoritas"
                  size="10px"
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
