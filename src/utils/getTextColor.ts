import {theme} from "../styles";
import {TextColorProps} from "../ui/atoms/Button/Button.types";

/**
 * @method getTextColor
 * Retrieves the color associated with a variant or text color option.
 * @param textColor The variant or text color option.
 * @returns The color value associated with the provided variant or text color option.
 */

const getTextColor = (textColor: TextColorProps): string => {
  const variantColors: Record<string, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    warning: theme.colors.warning,
    success: theme.colors.success,
    white: theme.colors.white,
    pinkDark: theme.colors.pinkDark,
    background: theme.colors.background,
    dark: theme.colors.dark
  };

  return variantColors[textColor];
};

export default getTextColor;
