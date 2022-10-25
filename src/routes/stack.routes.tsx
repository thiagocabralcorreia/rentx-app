import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { TimePicker } from "../screens/TimePicker";
import { TimePickerDetails } from "../screens/TimePickerDetails";
import { Confirmation } from "../screens/Confirmation";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="TimePicker" component={TimePicker} />
      <Screen name="TimePickerDetails" component={TimePickerDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
