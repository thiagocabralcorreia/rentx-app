import * as React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";

import * as S from "./styles";

interface HomeProps {}

export const Home = (props: HomeProps) => {
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
      <Card />
    </S.Container>
  );
};
