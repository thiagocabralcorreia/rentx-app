import * as React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";

import * as S from "./styles";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  const cars = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      period: "AO DIA",
      price: 120,
      thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
    },
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      period: "AO DIA",
      price: 120,
      thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
    },
  ];

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <Logo width={RFValue(114)} height={RFValue(11)} />
        <S.TotalCars>Total de 12 carros</S.TotalCars>
      </S.Header>

      <S.CarList
        data={cars}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => <Card data={item} />}
      />
    </S.Container>
  );
};
