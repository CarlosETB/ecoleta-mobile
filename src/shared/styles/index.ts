import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.ImageBackground.attrs({
  imageStyle: { width: 274, height: 368 },
})`
  flex: 1;
  padding: 32px;
  padding-top: ${Math.round(Dimensions.get("screen").height) * 0.1};
`;
