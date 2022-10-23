import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export interface IModelCar {
  brand: string;
  name: string;
  period: string;
  price: number;
  thumbnail: string;
}
export interface CarProps extends RectButtonProps {
  data: IModelCar;
}

export function Card({ data, ...rest }: CarProps) {
  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>R$ {data.price}</S.Price>
          </S.Rent>

          <S.Type></S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </S.Container>
  );
}
