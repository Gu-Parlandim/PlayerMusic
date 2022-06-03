import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AudioList from "./app/screens/AudioList";

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <AudioList />
    </View>
  );
};

export default App;
