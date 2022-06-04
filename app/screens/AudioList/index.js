import React, { useContext } from "react";
import * as S from "./audioList.style";
import { FlatList } from "react-native";
import AudioComponent from "../../components/AudioComponent";
import { AudioContext } from "../../context/AudioProvider";

const AudioList = () => {
  const { assets } = useContext(AudioContext);
  const renderItem = ({ item }) => <AudioComponent name={item.filename} />;
  console.log(assets);

  return (
    <S.Wrapper>
      <FlatList
        data={assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </S.Wrapper>
  );
};

export default AudioList;
