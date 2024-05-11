import type {ButtonProps} from "./Button.types";

import * as React from "react";

import * as Styled from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({textColor, label, ...rest}) => {
  return (
    <Styled.ButtonContainer {...rest}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.ButtonContainer>
  );
};
