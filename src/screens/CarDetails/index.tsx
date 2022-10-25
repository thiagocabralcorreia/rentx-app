import * as React from "react";

import SpeedIcon from "../../assets/speed.svg";
import AccelerationIcon from "../../assets/acceleration.svg";
import ForceIcon from "../../assets/force.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import ExchangeIcon from "../../assets/exchange.svg";
import PeopleIcon from "../../assets/people.svg";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";

import * as S from "./styles";
import { Accessory } from "../../components/Acessory";
import { useNavigation } from "@react-navigation/native";

interface CarDetailsProps {
  color: string;
}

export function CarDetails(props: CarDetailsProps) {
  const navigation = useNavigation();

  function handleTimePicker() {
    navigation.navigate("TimePicker");
  }

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
            <S.Period>{car.period}</S.Period>
            <S.Price>R$ {car.price}</S.Price>
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

        <S.About>
          Este é um automóvel desportivo. Este é um automóvel desportivo. Este é
          um automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo.
        </S.About>
        <S.About>
          Este é um automóvel desportivo. Este é um automóvel desportivo. Este é
          um automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo. Este é um automóvel desportivo. Este é um
          automóvel desportivo.
        </S.About>
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
