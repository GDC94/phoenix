import "@emotion/react";
import type {MainTheme} from "./theme";

declare module "@emotion/react" {
  export interface Theme extends MainTheme, MainTheme {}
}
