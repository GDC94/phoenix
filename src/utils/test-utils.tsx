import {cleanup, render} from "@testing-library/react";
import {afterEach, vi} from "vitest";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({children}) => children,
    ...options
  });
}

export * from "@testing-library/react";
export {default as userEvent} from "@testing-library/user-event";
export {customRender};
