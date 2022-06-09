import styled from "styled-components/native";

export const Modal = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2d2b47;
  z-index: 10;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #c5c4cf;
  font-weight: bold;
  padding: 15px 20px;
`;

export const OptionContainer = styled.View`
  padding: 0px 20px 20px;
`;

export const Option = styled.Text`
  color: ${({ color }) => color};
  font-size: 18px;
  font-weight: 800;
  padding: 5px 0;
  letter-spacing: 1px;
`;

export const ModalBg = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2d2b47;
  opacity: 0.5;
`;
