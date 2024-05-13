import styled from "@emotion/styled";

import {getVariant, getWeight} from "../../../utils";
import {FlexBasicConfig} from "../../../styles/components/flex";

import {ButtonProps} from "./Button.types";

type LabelProps = Pick<ButtonProps, "weight" | "textColor">;
type ButtonContainerProps = Pick<ButtonProps, "variant">;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: ${({theme}) => theme.size["2.5"]};
  background-color: ${({theme, variant}) => (variant !== null ? getVariant("dark") : theme.colors.organge)};
  border: 0;
  border-radius: ${({theme}) => theme.size["0.5"]};
  cursor: pointer;
  display: inline-block;
  padding: ${(props) => props.theme.size["0.875"]} ${(props) => props.theme.size["1.75"]};
  transition: background-color 0.3s;
  ${FlexBasicConfig},
  &:hover {
    background-color: ${({theme}) => theme.colors.gray400};
  }
`;

export const Label = styled.p<LabelProps>`
  color: ${({textColor, theme}) => (textColor ? getVariant(textColor) : theme.colors.dark)};
  font-size: ${({theme}) => theme.size["0.875"]};
  font-weight: ${({theme, weight}) => (weight ? getWeight(weight) : theme.weights.extraBold)};
  line-height: ${({theme}) => theme.size["1.5"]};
  text-align: center;
  text-transform: uppercase;
`;
