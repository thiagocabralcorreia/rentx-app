import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";

import { BackButton } from "../../components/BackButton";
import { Card } from "../../components/Card";

import * as S from "./styles";
import { LoadingAnimation } from "../../components/LoadingAnimation";

interface DataProps {
  id: string;
  car: any;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=1007");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <S.Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </S.Title>

        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsQuantity>{cars.length}</S.AppointmentsQuantity>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <Card data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  );
}
