import React, { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "styled-components";

import { format } from "date-fns";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { RootStackParamList } from "../Home";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";
import { Accessory } from "../../components/Acessory";

import * as S from "./styles";
import { Alert } from "react-native";

type NextScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SchedulingDetails"
>;
type NextScreenRouteProp = RouteProp<RootStackParamList, "SchedulingDetails">;

type NextScreenProps = {
  navigation: NextScreenNavigationProp;
  route: NextScreenRouteProp;
};

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails({ navigation, route }: NextScreenProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const { car, dates } = route.params as Params;
  const totalRent = Number(dates.length * car.rent.price);
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  async function handleConfirmation() {
    setLoading(true);

    const schedulesByCars = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCars.data.unavailable_dates,
      ...dates,
    ];

    await api.post("schedules_byuser", {
      user_id: 1007,
      car,
      startDate: rentalPeriod.start,
      endDate: rentalPeriod.end,
    });

    await api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() =>
        navigation.navigate("Confirmation", {
          nextScreenRoute: "Home",
          title: "Carro alugado!",
          message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.`,
        })
      )
      .catch(() => {
        setLoading(false);
        Alert.alert("Não foi possível confirmar o agendamento.");
      });
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>{`R$ ${car.rent.price}`}</S.Price>
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
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</S.RentalPriceQuota>
            <S.RentalPriceTotal>{`R$ ${totalRent}`}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmation}
          enabled={!loading}
          loading={loading}
        />
      </S.Footer>
    </S.Container>
  );
}
