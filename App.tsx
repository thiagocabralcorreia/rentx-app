import React from "react";
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

import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";

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
  if (!loadedFont) {
    SplashScreen.preventAutoHideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
