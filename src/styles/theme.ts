import "@emotion/react";
import {
  COLORS,
  QUERIES,
  SIZES,
  WEIGHTS,
  TypeThemeColors,
  TypeThemeQueries,
  TypeThemeSizes,
  TypeThemeWeights
} from "./components";

export const theme = {
  colors: COLORS,
  size: SIZES,
  queries: QUERIES,
  weights: WEIGHTS
};

type MainTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends MainTheme {
    colors: TypeThemeColors;
    size: TypeThemeSizes;
    queries: TypeThemeQueries;
    weights: TypeThemeWeights;
  }
}
