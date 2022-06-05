import React, { useContext } from "react";
import * as S from "./audioList.style";
import { Button, FlatList, Text } from "react-native";
import AudioComponent from "../../components/AudioComponent";
import { AudioContext } from "../../context/AudioProvider";
import { useTheme } from "@react-navigation/native";

const AudioList = () => {
  const { colors } = useTheme();

  const [mediaList, nextPage] = useContext(AudioContext);

  const renderItem = ({ item }) => (
    <AudioComponent
      name={item.filename}
      albumId={item.albumId}
      uri={item.uri}
    />
  );
  //console.log(assets);

  return (
    <S.Wrapper color={colors.background}>
      <FlatList
        data={mediaList.assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button title="Me bata" onPress={() => nextPage()} />
    </S.Wrapper>
  );
};

export default AudioList;
