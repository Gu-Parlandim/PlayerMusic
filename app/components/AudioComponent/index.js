import React, { memo, useEffect } from "react";
import * as S from "./audio.style";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import convertTime from "../../services/convertTime";
import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AudioComponent = ({
  name,
  onOptionPress,
  minute,
  onAudioPress,
  isPlaying,
  activeListItem,
}) => {
  const { colors } = useTheme();

  const renderPlayPauseIcon = (isPlaying) => {
    if (isPlaying) return <AntDesign name="play" size={26} color="#0496FF" />;
    return <AntDesign name="pausecircle" size={26} color="#0496FF" />;
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={onAudioPress}>
        <S.Wrapper>
          {activeListItem ? (
            renderPlayPauseIcon(isPlaying)
          ) : (
            <MaterialCommunityIcons
              name="music-circle"
              size={30}
              color="#fff"
            />
          )}

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
