import {theme} from "styles";
import {FontWeightProps} from "ui/atoms/Button/Button.types";

/**
 * @method getWeight
 * Retrieves the numerical value associated with a font weight option.
 * @param weight The font weight option.
 * @returns The numerical value of the font weight option.
 */

const getWeight = (weight: FontWeightProps): number => {
  const weightsOptions: Record<FontWeightProps, number> = {
    extraBold: theme.weights.extraBold,
    bold: theme.weights.bold,
    semiBold: theme.weights.semiBold,
    regular: theme.weights.regular,
    light: theme.weights.light
  };

  return weightsOptions[weight];
};

export default getWeight;
