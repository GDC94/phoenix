/* eslint-disable import/order */
/* eslint-disable import/export */
/* eslint-disable react-refresh/only-export-components */
import {afterEach, vi} from "vitest";
import {cleanup, render} from "@testing-library/react";
import {ThemeProvider} from "@emotion/react";

import {theme} from "../styles";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options
  });
}

export * from "@testing-library/react";

export {customRender as render};

export {default as userEvent} from "@testing-library/user-event";
