import type {ButtonProps} from "./Button.types";

import * as React from "react";

import * as Styled from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({textColor, label, variant = "primary", ...rest}) => {
  return (
    <Styled.ButtonContainer variant={variant} {...rest}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.ButtonContainer>
  );
};
