import React, { useCallback } from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import * as SplashScreen from "expo-splash-screen";
import theme from "./src/styles/theme";

import { CarDetails } from "./src/screens/CarDetails";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [loadedFont] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (loadedFont) {
    SplashScreen.hideAsync();
  }
  if (!loadedFont) return null;

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}
