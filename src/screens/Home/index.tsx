import * as React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, TotalCars } from "./styles";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo width={RFValue(114)} height={RFValue(11)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </Header>
    </Container>
  );
};
