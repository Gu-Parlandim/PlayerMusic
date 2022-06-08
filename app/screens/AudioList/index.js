import React, { useContext, useEffect, useState } from "react";
import * as S from "./audioList.style";
import {
  Text,
  VirtualizedList,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import AudioComponent from "../../components/AudioComponent";
import { AudioContext } from "../../context/AudioProvider";
import { useTheme } from "@react-navigation/native";
import getAudiosMP3 from "../../services/getAudiosMP3";

const AudioList = () => {
  const { colors } = useTheme();
  const [audiosList, getAudioFiles] = useContext(AudioContext);
  const [media, setMedia] = useState([]);

  const getItem = (data, index) => data[index];
  const getItemCount = (data) => data.length;

  useEffect(() => {
    if (audiosList.assets) {
      setMedia(getAudiosMP3(audiosList.assets));
    }
  }, [audiosList]);

  function renderItem({ item }) {
    return <AudioComponent name={item.filename} minute={item.duration} />;
  }

  return (
    <S.Wrapper color={colors.background}>
      {/*  <FlatList
        data={media}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
      /> */}

      {media.length > 0 && (
        <VirtualizedList
          data={media}
          initialNumToRender={5}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
    </S.Wrapper>
  );
};

export default AudioList;
