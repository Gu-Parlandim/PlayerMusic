import { View, Text } from "react-native";
import * as S from "./header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const HeaderHome = () => {
  return (
    <SafeAreaView>
      <S.Wrapper>
        <View></View>
        <S.Title>Music Player</S.Title>
        <Entypo name="magnifying-glass" size={30} color="#fff" />
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default HeaderHome;
