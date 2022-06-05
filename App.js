import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AudioProvider from "./app/context/AudioProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DefaultTheme from "./app/styles/DefaultTheme";

const App = () => {
  return (
    <AudioProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={DefaultTheme}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AudioProvider>
  );
};

export default App;
