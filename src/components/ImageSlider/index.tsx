import React from "react";
import { Bullet } from "../Bullet";
import * as S from "./styles";

interface Props {
  imagesUrl: string;
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <S.Container>
      <S.ImageIndexes>
        <Bullet active={true} />
        <Bullet active={false} />
        <Bullet active={false} />
      </S.ImageIndexes>
      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  );
}
