import React, { useEffect, createContext, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Text, Alert } from "react-native";

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [mediaList, setMediaList] = useState([]);
  /* {
        "canAskAgain": true, 
        "expires": "never", 
        "granted": false, 
        "status": "undetermined"
    } */
  const getAudioFiles = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: 30,
    });

    setMediaList(media);
  };

  const getPermission = async () => {
    const { canAskAgain, expires, granted, status } =
      await MediaLibrary.getPermissionsAsync();

    if (granted) {
      getAudioFiles();
    }

    if (!granted && canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === "denied") {
        permissionAlert();
      }

      if (status === "granted") {
        getAudioFiles();
      }

      if (status == -"denied" && !canAskAgain) {
      }
    }
  };

  const permissionAlert = () => {
    Alert.alert(
      "Permissão necessaria",
      "Esse aplicativo precissa da perimissão para acessear os arquivos de audio",
      [
        {
          text: "Permitir",
          onPress: () => getPermission(),
        },
        {
          text: "cancelar",
          onPress: () => permissionAlert(),
        },
      ]
    );
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <AudioContext.Provider value={mediaList}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
