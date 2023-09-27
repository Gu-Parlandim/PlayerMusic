import React, { useEffect, createContext, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import permissionAlert from "../services/permissionAlert";
import getPermission from "../services/getPermission";
import getAudiosMP3 from "../services/getAudiosMP3";

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [audiosList, setAudiosList] = useState([]);
  const [audioStates, setAudioStates] = useState({
    playBackObj: null,
    soundObjt: null,
    currentAudio: {},
    currentAudioIndex: null,
    isPlaying: false,
  });
  const [Offset, setOffset] = useState(null);
  const limit = 20;

  function orderArray(a, b) {
    if (a.filename > b.filename) {
      return 1;
    }
    if (a.filename < b.filename) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  const getAudioFiles = async (Offset = null) => {
    MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    })
      .then(({ totalCount }) => {
        MediaLibrary.getAssetsAsync({
          mediaType: "audio",
          first: totalCount,
        }).then((media) => {
          const arrayWithOnlyMp3 = getAudiosMP3(media.assets);
          setAudiosList(arrayWithOnlyMp3.sort(orderArray));
        });
      })
      .catch((error) => console.log(error));
  };

  /*  const getMoreAudios = () => {
    if (Offset === null) {
      setOffset(limit);
      getAudioFiles(limit.toString());
    } else {
      setOffset(Offset + limit);
      getAudioFiles((Offset + limit).toString());
    }
  }; */

  useEffect(() => {
    getPermission(permissionAlert, getAudioFiles);
  }, []);

  const { playBackObj, soundObjt, currentAudio, isPlaying, currentAudioIndex } =
    audioStates;
  return (
    <AudioContext.Provider
      value={[
        audiosList,
        playBackObj,
        soundObjt,
        currentAudio,
        setAudioStates,
        isPlaying,
        currentAudioIndex,
      ]}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
