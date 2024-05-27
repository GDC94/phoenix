import type {ButtonProps} from "./Button.types";

import * as React from "react";

import * as Styled from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({onClick, label, variant, color, weight, disabled, ...rest}) => {
  return (
    <Styled.ButtonContainer onClick={onClick} disabled={disabled} variant={variant} color={color} {...rest}>
      <Styled.Label variant={variant} weight={weight}>
        {label}
      </Styled.Label>
    </Styled.ButtonContainer>
  );
};

export default Button;
