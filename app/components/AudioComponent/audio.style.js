import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  width: 100%;
  margin: 5px 0;
  justify-content: flex-start;
  padding: 5px;
`;

export const WrapperText = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  width: 79%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ color }) => color};
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const Span = styled.Text`
  color: #f2f2f2;
  font-size: 14px;
`;

export const Pressable = styled.Pressable`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
