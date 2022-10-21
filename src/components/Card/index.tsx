import React from "react";

import * as S from "./styles";

export function Card() {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>AUDI</S.Brand>
        <S.Name>RS 5 Coupê</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 120</S.Price>
          </S.Rent>

          <S.Type>{/* <MotorIcon /> */}</S.Type>
        </S.About>
      </S.Details>

      <S.CarImage
        source={{
          uri: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
}
