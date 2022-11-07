import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButton } from "react-native-gesture-handler";

import * as S from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.IconContainer>
        <Feather
          name={iconName}
          size={22}
          isFocused={isFocused}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </S.IconContainer>
      <S.InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        secureTextEntry={isPasswordVisible}
        autoCorrect={false}
        {...rest}
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <S.IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color={theme.colors.text_detail}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  );
}
