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
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    warning: theme.colors.warning,
    success: theme.colors.success,
    white: theme.colors.white,
    gray400: theme.colors.gray400,
    pinkDark: theme.colors.pinkDark,
    background: theme.colors.background,
    yellow: theme.colors.yellow,
    tomato: theme.colors.tomato,
    organge: theme.colors.organge,
    dark: theme.colors.dark
  };

  return variantColors[variant];
};

export default getVariant;
