import {type Theme} from "@emotion/react";

import {ColorProps, VariantProps} from "../ui/atoms/Button/Button.types";

/**
 * @method getColor
 * Retrieves the color associated with a variant or text color option.
 * @param variant The variant or text color option.
 * @returns The color value associated with the provided variant or text color option.
 */

const getVariantColors = (color: ColorProps, variant: VariantProps, theme: Theme): string => {
  const styles = {
    solid: {
      backgroundColor: theme.colors[color]?.[300] || theme.colors.black[100],
      borderColor: theme.colors[color]?.[300] || theme.colors.black[100],
      color: theme.colors.white,
      hover: {
        backgroundColor: theme.colors[color]?.[400] || theme.colors.black[200],
        borderColor: theme.colors[color]?.[400] || theme.colors.black[200]
      },
      disabled: {
        backgroundColor: theme.colors.gray[900],
        borderColor: theme.colors.gray[900],
        color: theme.colors.gray[700]
      }
    },
    flat: {
      backgroundColor: theme.colors[color]?.[700] || theme.colors.blue[700],
      borderColor: "transparent",
      color: theme.colors[color]?.[300] || theme.colors.blue[300],
      hover: {
        backgroundColor: theme.colors[color]?.[800] || theme.colors.blue[800],
        color: theme.colors[color]?.[400] || theme.colors.blue[400]
      },
      disabled: {
        backgroundColor: theme.colors.gray[900],
        color: theme.colors.gray[700]
      }
    },
    light: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: theme.colors[color]?.[300] || theme.colors.blue[300],
      hover: {
        backgroundColor: theme.colors[color]?.[100] || theme.colors.blue[100]
      },
      disabled: {
        color: theme.colors.gray[700],
        backgroundColor: "transparent"
      }
    },
    faded: {
      backgroundColor: theme.colors.black[100],
      borderColor: theme.colors.blue[300],
      color: theme.colors.blue[300],
      hover: {
        backgroundColor: theme.colors.blue[700]
      },
      disabled: {
        backgroundColor: theme.colors.gray[900],
        borderColor: theme.colors.gray[700],
        color: theme.colors.gray[700]
      }
    },
    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: theme.colors.blue[300]
    }
  };

  return styles[variant] || {};

  return variantColors[color];
};

export default getVariantColors;
