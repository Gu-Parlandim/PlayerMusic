import * as S from "./tabBar.style";

const TabBarLabel = ({ color, size, text }) => {
  return (
    <S.Label color={color} size={size}>
      {text}
    </S.Label>
  );
};

export default TabBarLabel;
