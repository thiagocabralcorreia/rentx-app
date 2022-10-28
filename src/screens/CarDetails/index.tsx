import * as React from "react";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";

import * as S from "./styles";
import { Accessory } from "../../components/Acessory";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface CarDetailsProps {
  color: string;
}

export interface IParams {
  car: CarDTO;
}

export function CarDetails(props: CarDetailsProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as IParams;

  function handleBack() {
    navigation.goBack();
  }

  function handleTimePicker() {
    navigation.navigate("TimePicker", { car });
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>
      <S.CarImages>
        <ImageSlider imagesUrl={car.thumbnail} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleTimePicker}
        />
        <S.OfflineInfo>
          Conecte-se a internet para ver mais detalhes e agendar seu carro.
        </S.OfflineInfo>
      </S.Footer>
    </S.Container>
  );
}
