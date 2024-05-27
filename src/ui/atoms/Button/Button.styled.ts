import styled from "@emotion/styled";
import {css} from "@emotion/react";

import {getVariant, getWeight} from "../../../utils";
import {FlexBasicConfig} from "../../../styles/components/flex";

import {ButtonProps, VARIANTS} from "./Button.types";

type LabelProps = Pick<ButtonProps, "weight" | "variant">;

type ButtonContainerProps = Pick<ButtonProps, "variant" | "disabled" | "color">;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: auto;
  background-color: ${({theme, variant}) => (variant ? getVariant(variant) : theme.colors.black[100])};
  border: 2px solid;
  border-radius: ${({theme}) => theme.size["0.5"]};
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  display: inline-block;
  padding: ${(props) => props.theme.size["0.5"]} ${(props) => props.theme.size["1.75"]};
  transition: background-color 0.3s;
  max-width: 400px;
  transition: 0.4s;
  ${FlexBasicConfig}

  ${({variant, theme, color}) =>
    variant === VARIANTS.SOLID &&
    css`
      background-color: ${theme.colors?.[color]?.[300]};
      border-color: ${theme.colors?.[color]?.[300]};
      &:hover {
        background-color: ${theme.colors?.[color]?.[400]};
        border-color: ${theme.colors[color][400]};
      }
    `}

  ${({variant, theme, color}) =>
    variant === VARIANTS.FADED &&
    css`
      background-color: ${theme.colors.black[100]};
      border-color: ${theme.colors?.[color]?.[300]};
      color: ${theme.colors?.[color]?.[300]};
      &:hover {
        background-color: ${theme.colors[color][700]};
      }
    `}

  ${({variant, theme, color}) =>
    variant === VARIANTS.GHOST &&
    css`
      background-color: transparent;
      border-color: ${theme.colors?.[color]?.[300]};
      color: ${theme.colors?.[color]?.[300]};

      &:hover {
        background-color: ${theme.colors?.[color]?.[300]};
        color: ${theme.colors.white[100]};
      }
    `}
    
  ${({variant, theme, color}) =>
    variant === VARIANTS.FLAT &&
    css`
      background-color: ${theme.colors?.[color]?.[700]};
      color: ${theme.colors?.[color]?.[200]};
      border-color: transparent;

      &:hover {
        background-color: ${theme.colors?.[color]?.[800]};
        color: ${theme.colors?.[color]?.[300]};
      }
    `}

  ${({variant, theme, color}) =>
    variant === VARIANTS.LIGHT &&
    css`
      background-color: transparent;
      color: ${theme.colors?.[color]?.[300]};
      border-color: transparent;
      &:hover {
        background-color: ${theme.colors?.[color]?.[700]};
      }
    `}
  
  &:disabled {
    background-color: ${({theme}) => theme.colors.gray[900]};
    border-color: ${({theme}) => theme.colors.gray[900]};
    color: ${({theme}) => theme.colors.gray[700]};
  }
`;

export const Label = styled.p<LabelProps>`
  font-size: ${({theme}) => theme.size["1"]};
  font-weight: ${({theme, weight}) => (weight ? getWeight(weight) : theme.weights.regular)};
  line-height: ${({theme}) => theme.size["1.5"]};
  text-align: center;
`;
