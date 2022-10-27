import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";
import { Loader } from "../../components/Loader";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import * as S from "./styles";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  const [cars, setCars] = useState<CarDTO>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

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
      {isLoading ? (
        <Loader />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </S.Container>
  );
};
