import React from "react";
import * as S from "./audio.style";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const AudioComponent = ({ name, albumId, uri }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <S.Wrapper>
        <MaterialCommunityIcons name="music-circle" size={30} color="#fff" />

        <S.WrapperText>
          <S.Title color={colors.text}>{name}</S.Title>
          <S.Span color={colors.text}>Album: "undetermined"</S.Span>
        </S.WrapperText>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default AudioComponent;
