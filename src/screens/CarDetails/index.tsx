import * as React from "react";
import { BackButton } from "../../components/BackButton/intdex";
import { Button } from "../../components/Button";
import * as S from "./styles";

interface CarDetailsProps {
  color: string;
}

export function CarDetails(props: CarDetailsProps) {
  const car = {
    brand: "Audi",
    name: "RS 5 Coupé",
    period: "AO DIA",
    price: 120,
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton />
      </S.Header>
      <S.CarImages></S.CarImages>

      <S.Details>
        <S.Description>
          <S.Brand>{car.brand}</S.Brand>
          <S.Name>{car.name}</S.Name>
        </S.Description>

        <S.Rent>
          <S.Period>{car.period}</S.Period>
          <S.Price>R$ {car.price}</S.Price>
        </S.Rent>
      </S.Details>

      <S.Footer>
        <Button title="Escolher período do aluguel" />

        <S.OfflineInfo>
          Conecte-se a internet para ver mais detalhes e agendar seu carro.
        </S.OfflineInfo>
      </S.Footer>
    </S.Container>
  );
}