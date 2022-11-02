import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

import Logo from "../../assets/logo.svg";
import { Card } from "../../components/Card";
import { Loader } from "../../components/Loader";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export type RootStackParamList = {
  SignIn: {} | undefined;
  SignUpFirstStep: {} | undefined;
  SignUpSecondStep: {} | undefined;
  Confirmation: {} | undefined;
  Splash: undefined;
  Home: {} | undefined;
  CarDetails: {} | undefined;
  TimePicker: {} | undefined;
  SchedulingDetails: {} | undefined;
  MyCars: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const [cars, setCars] = useState<CarDTO>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars(car: CarDTO) {
    navigation.navigate("MyCars");
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
        <S.TotalCars>{`Total de ${cars.length} carros`}</S.TotalCars>
      </S.Header>
      {isLoading ? (
        <Loader />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <S.MyCarstButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </S.MyCarstButton>
    </S.Container>
  );
};
