import {HttpResponse, http} from "msw";
import {describe, expect} from "vitest";

import App from "./App";
import {customRender, screen, userEvent} from "./utils/test-utils";
import Server from "./test/mocks/node";

describe("Tests on <App/> component", () => {
  test("checking whether vite and react text is available", () => {
    customRender(<App />);
    const text = screen.getByText("Phoenix: System design and development");

    expect(text).toBeDefined();
  });
  test("Should increment count on click", async () => {
    customRender(<App />);
    userEvent.click(screen.getByRole("button"));
    const countShouldBeOne = await screen.findByText(/count is 1/i);

    expect(countShouldBeOne).toBeInTheDocument();
  });
  test("Should be null if status is 401", () => {
    customRender(<App />);
    Server.use(
      http.get("/api/networks", () => {
        return new HttpResponse(null, {status: 401});
      })
    );
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
  });
  test("Should be rendered the word Ethereum ", async () => {
    customRender(<App />);
    const ETH = await screen.findAllByText(/ethereum/i);

    expect(ETH).toBeDefined();
  });
});
