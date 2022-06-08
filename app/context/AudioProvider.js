import React, { useEffect, createContext, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Text, Alert } from "react-native";

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [endPage, setEndPage] = useState(null);
  const [audiosList, setAudiosList] = useState([]);

  const getAudioFiles = async () => {
    MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    })
      .then(({ totalCount }) => {
        MediaLibrary.getAssetsAsync({
          mediaType: "audio",
          first: totalCount,
        }).then((media) => {
          setAudiosList(media);
        });
      })
      .catch((error) => console.log(error));
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
    <AudioContext.Provider value={[audiosList, getAudioFiles]}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
