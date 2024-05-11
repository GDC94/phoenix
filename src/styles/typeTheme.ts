import "@emotion/react";
import type {MainTheme, TypeThemeColors} from "./theme";

declare module "@emotion/react" {
  export interface Theme extends MainTheme {
    colors: TypeThemeColors;
  }
}
