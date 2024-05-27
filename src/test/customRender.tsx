/* eslint-disable import/named */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable import/export */
import React, {ReactElement} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {ThemeProvider} from "@emotion/react";

import {theme} from "../styles";

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from "@testing-library/react";

export {customRender as render};