import type {ButtonProps} from "./Button.types";

import * as React from "react";

import * as Styled from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({onClick, textColor, label, variant, color, ...rest}) => {
  return (
    <Styled.ButtonContainer onClick={onClick} variant={variant} color={color} {...rest}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.ButtonContainer>
  );
};
