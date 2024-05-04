import {describe, expect, it} from "vitest";
import {HttpResponse, http} from "msw";

import App from "./App";
import {customRender, screen, userEvent} from "./utils/test-utils";
import {Server} from "./test/mocks";

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

    expect(countShouldBeOne).toBeInTheDocument();
  });
  it("Should be null if status is 401", () => {
    customRender(<App />);
    Server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, {status: 401});
      })
    );
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
  });
});
