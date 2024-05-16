import styled from "@emotion/styled";

import {getVariant, getWeight} from "../../../utils";
import {FlexBasicConfig} from "../../../styles/components/flex";

import {ButtonProps} from "./Button.types";

type LabelProps = Pick<ButtonProps, "weight" | "textColor">;

type ButtonContainerProps = Pick<ButtonProps, "variant">;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: auto;
  background-color: ${({theme, variant}) => (variant ? getVariant(variant) : theme.colors.black[100])};
  border: 2px solid ${({theme}) => theme.colors.blue[300]};
  border-radius: ${({theme}) => theme.size["0.5"]};
  cursor: pointer;
  outline: none;
  display: inline-block;
  padding: ${(props) => props.theme.size["0.5"]} ${(props) => props.theme.size["1.75"]};
  transition: background-color 0.3s;
  max-width: 200px;
  ${FlexBasicConfig}
`;

export const Label = styled.p<LabelProps>`
  color: ${({textColor, theme}) => (textColor ? getVariant(textColor) : theme.colors.blue[300])};
  font-size: ${({theme}) => theme.size["1"]};
  font-weight: ${({theme, weight}) => (weight ? getWeight(weight) : theme.weights.regular)};
  line-height: ${({theme}) => theme.size["1.5"]};
  text-align: center;
`;
