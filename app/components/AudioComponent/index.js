import React, { memo } from "react";
import * as S from "./audio.style";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import convertTime from "../../services/convertTime";
import { TouchableWithoutFeedback } from "react-native";

const AudioComponent = ({ name, onOptionPress, minute, onAudioPress }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={onAudioPress}>
        <S.Wrapper>
          <MaterialCommunityIcons name="music-circle" size={30} color="#fff" />

          <S.WrapperText>
            <S.Title numberOfLines={1} color={colors.text}>
              {name}
            </S.Title>
            <S.Span color={colors.text}>{convertTime(minute)}</S.Span>
          </S.WrapperText>

          <S.Pressable onPress={onOptionPress}>
            <Feather name="more-vertical" size={30} color="#fff" />
          </S.Pressable>
        </S.Wrapper>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default memo(AudioComponent);
