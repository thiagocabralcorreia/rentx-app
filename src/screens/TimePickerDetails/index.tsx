import React from "react";
//import { format } from 'date-fns';
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Button } from "../../components/Button";
import SpeedIcon from "../../assets/speed.svg";
import AccelerationIcon from "../../assets/acceleration.svg";
import ForceIcon from "../../assets/force.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import ExchangeIcon from "../../assets/exchange.svg";
import PeopleIcon from "../../assets/people.svg";

import * as S from "./styles";
import { Accessory } from "../../components/Acessory";
import { useNavigation } from "@react-navigation/native";

interface RentalPeriod {
  start: string;
  end: string;
}

export function TimePickerDetails() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleConfirmation() {
    navigation.navigate("Confirmation");
  }

  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl="https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png" />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamburghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 580</S.Price>
          </S.Rent>
        </S.Details>
        <S.Accessories>
          <Accessory name="300km/h" icon={SpeedIcon} />
          <Accessory name="3.2s" icon={AccelerationIcon} />
          <Accessory name="800 HP" icon={ForceIcon} />
          <Accessory name="Gasolina" icon={GasolineIcon} />
          <Accessory name="Auto" icon={ExchangeIcon} />
          <Accessory name="2 Pessoas" icon={PeopleIcon} />
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>18/10/2021</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>21/10/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmation}
        />
      </S.Footer>
    </S.Container>
  );
}
