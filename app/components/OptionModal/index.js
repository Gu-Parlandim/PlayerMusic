import React from "react";
import { Modal, TouchableWithoutFeedback } from "react-native";
import * as S from "./optionModal.style";

const OptionModal = ({
  visible,
  colors,
  onClose,
  currentItem,
  onPlayPress,
  onPlayListPress,
  onFavoritePress,
}) => {
  const { filename } = currentItem;
  return (
    <>
      <Modal animationType="slide" visible={visible} transparent>
        <S.Modal color={colors.background}>
          <S.Title color={colors.primary} numberOfLines={2}>
            {filename}
          </S.Title>
          <S.OptionContainer>
            <TouchableWithoutFeedback onPress={onPlayPress}>
              <S.Option color={colors.text}>Play</S.Option>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onPlayListPress}>
              <S.Option color={colors.text}>Adicionar na Playlist</S.Option>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onFavoritePress}>
              <S.Option color={colors.text}>Adicionar nos Favoritos</S.Option>
            </TouchableWithoutFeedback>
          </S.OptionContainer>
        </S.Modal>

        <TouchableWithoutFeedback onPress={onClose}>
          <S.ModalBg></S.ModalBg>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default OptionModal;
