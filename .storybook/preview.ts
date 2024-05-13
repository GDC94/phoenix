import type {Preview} from "@storybook/react";

import {withThemeFromJSXProvider} from "@storybook/addon-themes";
import {ThemeProvider} from "@emotion/react";

import {theme} from "../src/styles/theme.ts";
import GlobalStyles from "../src/styles/globalStyles.ts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme
      },
      Provider: ThemeProvider,
      GlobalStyles
    })
  ]
};

export default preview;
