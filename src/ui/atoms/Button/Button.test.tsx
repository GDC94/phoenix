import type {ButtonProps} from "./Button.types";

import {beforeEach, describe, it} from "vitest";

import {render, screen} from "../../../test/customRender";

import Button from "./Button";

describe("Button", () => {
  let defaultProps: ButtonProps;

  beforeEach(() => {
    defaultProps = {
      variant: "solid",
      label: "Solid Tested label",
      color: "blue",
      weight: "bold",
      onClick: () => {},
      disabled: false
    };
  });

  it("[TEST] Should render a SOLID variant button with the Button 'Solid Tested label'", () => {
    render(<Button {...defaultProps} />);
    const solidBTN = screen.getByRole("button", {name: "Solid Tested label"});

    expect(solidBTN).toBeInTheDocument();
  });
});
