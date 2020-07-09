import React from "react";

// Private
import { Touchable, ButtonIcon, Icon, Text } from "./styles";

const Button = () => {
  return (
    <Touchable>
      <ButtonIcon>
        <Icon />
      </ButtonIcon>

      <Text>Entrar</Text>
    </Touchable>
  );
};

export default Button;
