import type {ButtonProps} from "./Button.types";

import {beforeEach, describe, it} from "vitest";

import {render, screen} from "../../../utils/test-utils";
import {theme} from "../../../styles";

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

  it("[TEST] Should render a disabled button", () => {
    render(<Button {...defaultProps} disabled={true} label="Disabled Button" />);
    const disabledBTN = screen.getByRole("button", {name: "Disabled Button"});

    expect(disabledBTN).toBeDisabled();
  });
  it("[TEST] Should render a button with specified background color", () => {
    render(<Button {...defaultProps} label="Solid Button" weight="bold" />);
    const primaryTextBTN = screen.getByRole("button", {name: "Solid Button"});

    expect(primaryTextBTN).toHaveStyle(`background-color: ${theme.colors.blue[300]}`);
  });
  it("[TEST] Should not call onClick handler when disabled", () => {
    const onClickMock = vi.fn();

    render(<Button {...defaultProps} onClick={onClickMock} disabled={true} label="Disabled Button" />);
    const disabledBTN = screen.getByRole("button", {name: "Disabled Button"});

    disabledBTN.click();

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
