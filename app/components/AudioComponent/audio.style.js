import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #000;
  width: 95%;
  margin: 5px 0;
  justify-content: flex-start;
`;

export const Image = styled.View`
  width: 50px;
  height: 50px;
  padding: 5px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 18px;
`;
