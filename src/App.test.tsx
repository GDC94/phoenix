import {describe, expect, it} from "vitest";
import App from "./App";
import {customRender, screen, userEvent} from "./utils/test-utils";
import React from "react";

describe("Tests on <App/> component", () => {
  it("checking whether vite and react text is available", () => {
    customRender(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeDefined();
  });
  it("Should increment count on click", async () => {
    customRender(<App />);
    userEvent.click(screen.getByRole("button"));
    const countShouldBeOne = await screen.findByText(/count is 1/i);
    expect(countShouldBeOne).toBeTruthy();
  });
});
