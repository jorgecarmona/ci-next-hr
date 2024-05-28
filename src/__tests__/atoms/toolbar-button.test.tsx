import {render, screen} from "@testing-library/react";
import {ToolbarButton} from "../../atoms";

import {IconType} from "../../atoms/icon-store";

describe("ToolbarButton Component", () => {
  it("renders with default properties", () => {
    render(<ToolbarButton>Default Button</ToolbarButton>);

    const button = screen.getByRole("button", {name: /default button/i});
    expect(button).toHaveClass("MuiButton-text");
  });

  it("renders with selected property", () => {
    render(<ToolbarButton selected>Selected Button</ToolbarButton>);

    const button = screen.getByRole("button", {name: /selected button/i});
    expect(button).toHaveClass("selected");
  });

  it("renders with icon", () => {
    render(<ToolbarButton icon={IconType.Library}>icon Button</ToolbarButton>);

    const button = screen.getByTestId("LocalLibraryOutlinedIcon");
    expect(button).toHaveClass("MuiSvgIcon-root");
  });
});
