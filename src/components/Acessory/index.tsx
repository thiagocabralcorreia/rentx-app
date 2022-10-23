import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";
import * as S from "./styles";

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: AccessoryProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <Icon width={30} height={30} fill={theme.colors.header} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}
