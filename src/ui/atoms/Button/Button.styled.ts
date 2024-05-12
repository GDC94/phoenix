import styled from "@emotion/styled";

import getVariant from "../../../utils/getVariant";
import getWeight from "../../../utils/getWeight";

import {ButtonProps, VariantProps} from "./Button.types";

type LabelProps = Pick<ButtonProps, "weight" | "textColor">;
interface ButtonContainerProps {
  variant?: VariantProps;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: ${({theme}) => theme.size["2.5"]};
  background-color: ${({theme, variant}) => (variant ? getVariant(variant) : theme.colors.organge)};
  border: 0;
  border-radius: ${({theme}) => theme.size["0.5"]};
  cursor: pointer;
  display: inline-block;
  padding: ${({theme}) => theme.size["0.5"]} ${({theme}) => theme.size["1"]};
  transition: background-color 0.3s;
  display: flex;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: ${({theme}) => theme.colors.organge};
  }
`;

export const Label = styled.p<LabelProps>`
  color: ${({textColor, theme}) => (textColor ? getVariant(textColor) : theme.colors.dark)};
  font-size: ${({theme}) => theme.size["1"]};
  font-weight: ${({theme, weight}) => (weight ? getWeight(weight) : theme.weights.bold)};
  line-height: ${({theme}) => theme.size["1.5"]};
  text-align: center;
  text-transform: uppercase;
`;
