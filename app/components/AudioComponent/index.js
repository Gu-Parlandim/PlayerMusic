import React, { memo } from "react";
import * as S from "./audio.style";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import convertTime from "../../services/convertTime";

const AudioComponent = ({ name, albumId, uri, minute }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <S.Wrapper>
        <MaterialCommunityIcons name="music-circle" size={30} color="#fff" />

        <S.WrapperText>
          <S.Title numberOfLines={1} color={colors.text}>
            {name}
          </S.Title>
          <S.Span color={colors.text}>{convertTime(minute)}</S.Span>
        </S.WrapperText>

        <S.Pressable>
          <Feather name="more-vertical" size={30} color="#fff" />
        </S.Pressable>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default memo(AudioComponent);
