import React, { useEffect, createContext, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import permissionAlert from "../services/permissionAlert";
import getPermission from "../services/getPermission";

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [audiosList, setAudiosList] = useState([]);
  const [audioStates, setAudioStates] = useState({
    playBackObj: null,
    soundObjt: null,
    currentAudio: {},
  });

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

  useEffect(() => {
    getPermission(permissionAlert, getAudioFiles);
  }, []);

  const { playBackObj, soundObjt, currentAudio } = audioStates;
  return (
    <AudioContext.Provider
      value={[audiosList, playBackObj, soundObjt, currentAudio, setAudioStates]}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
