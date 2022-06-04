import React from "react";
import * as S from "./audio.style";
import { Image } from "react-native";

const AudioComponent = ({ name, albumId, uri }) => {
  return (
    <S.Wrapper>
      <S.Image>
        <Image
          source={require("../../assets/images/music.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </S.Image>
      <S.Title>{name}</S.Title>
    </S.Wrapper>
  );
};

export default AudioComponent;
