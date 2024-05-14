import {theme} from "../styles";
import {TextColorProps, VariantProps} from "../ui/atoms/Button/Button.types";

/**
 * @method getVariant
 * Retrieves the color associated with a variant or text color option.
 * @param variant The variant or text color option.
 * @returns The color value associated with the provided variant or text color option.
 */

const getVariant = (variant: VariantProps | TextColorProps): string => {
  const variantColors: Record<string, string> = {
    solid: theme.colors.blue[300],
    faded: theme.colors.gray[300],
    bordered: theme.colors.black[100],
    light: theme.colors.black[100],
    flat: theme.colors.blue[700],
    ghost: theme.colors.black[100]
  };

  return variantColors[variant];
};

export default getVariant;
