import React from "react";
import * as S from "./Player.style";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Player = () => {
  return (
    <S.Wrapper>
      <LinearGradient
        colors={["#11101C", "#3A375A"]}
        style={{ flex: 1, position: "absolute", inset: 0 }}
        locations={[0.01, 0.9]}
      />
      <SafeAreaView>
        <S.WrapperHeader>
          <AntDesign name="arrowleft" size={24} color="#fff" />
          <S.Title>1/99</S.Title>
          <AntDesign name="hearto" size={24} color="#fff" />
        </S.WrapperHeader>
      </SafeAreaView>
    </S.Wrapper>
  );
};

export default Player;
