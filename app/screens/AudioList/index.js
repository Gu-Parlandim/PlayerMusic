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
import OptionModal from "../../components/OptionModal";
import { Audio } from "expo-av";
import { play, pause, resume, playNext } from "../../services/audioController";

const AudioList = () => {
  const { colors } = useTheme();
  const [audiosList, playBackObj, soundObjt, currentAudio, setAudioStates] =
    useContext(AudioContext);

  const [media, setMedia] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState({
    optionModalVisible: false,
  });
  const [currentItem, setCurrentItem] = useState({});

  const getItem = (data, index) => data[index];
  const getItemCount = (data) => 10;

  const handleOnClose = () => {
    setModalIsVisible({ ...modalIsVisible, optionModalVisible: false });
  };

  const handleAudioPress = async (audio) => {
    const { uri } = audio;

    //Play
    if (soundObjt === null) {
      const playBackObj = new Audio.Sound();

      const status = await play(playBackObj, uri);

      return setAudioStates((current) => {
        return {
          ...current,
          currentAudio: audio,
          playBackObj: playBackObj,
          soundObjt: status,
        };
      });
    }

    // Pause
    if (
      soundObjt.isLoaded &&
      soundObjt.isPlaying &&
      currentAudio.id == audio.id
    ) {
      const status = await pause(playBackObj);

      return setAudioStates((current) => {
        return {
          ...current,
          soundObjt: status,
        };
      });
    }

    // resume
    if (soundObjt.isLoaded && !soundObjt.isPlaying) {
      const status = await resume(playBackObj);

      return setAudioStates((current) => {
        return {
          ...current,
          soundObjt: status,
        };
      });
    }

    //another audio
    if (soundObjt.isLoaded && currentAudio.id !== audio.id) {
      const status = await playNext(playBackObj, uri);

      return setAudioStates((current) => {
        return {
          ...current,
          currentAudio: audio,
          playBackObj: playBackObj,
          soundObjt: status,
        };
      });
    }
  };

  useEffect(() => {
    if (audiosList.assets) {
      setMedia(getAudiosMP3(audiosList.assets));
    }
  }, [audiosList]);

  function renderItem({ item }) {
    return (
      <AudioComponent
        name={item.filename}
        minute={item.duration}
        onAudioPress={() => handleAudioPress(item)}
        onOptionPress={() => {
          setCurrentItem(item);
          setModalIsVisible({ ...modalIsVisible, optionModalVisible: true });
        }}
      />
    );
  }

  return (
    <S.Wrapper color={colors.background}>
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

      <OptionModal
        currentItem={currentItem}
        onClose={handleOnClose}
        visible={modalIsVisible.optionModalVisible}
        colors={colors}
      />
    </S.Wrapper>
  );
};

export default AudioList;
