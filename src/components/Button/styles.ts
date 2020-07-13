// Native
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

// Shared
import { color } from "~/shared/color";

export const Touchable = styled(RectButton)`
  height: 60px;
  margin: 0 8px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${color.primary};
`;

export const ButtonIcon = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  name: "arrow-right",
  color: color.white,
})``;

export const Text = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: ${color.white};
  justify-content: center;
  font-family: "Roboto_500Medium";
`;
