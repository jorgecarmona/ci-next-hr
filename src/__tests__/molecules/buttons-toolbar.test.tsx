import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {ButtonsToolbar} from "../../molecules";
import {IconType} from "../../atoms/icon-store";

const callBack = jest.fn();

const items = [
  {
    icon: IconType.Dashboard,
    text: "All"
  },
  {
    icon: IconType.Business,
    text: "Leaves"
  },
  {
    icon: IconType.File,
    text: "Drafts"
  },
  {
    icon: IconType.Desktop,
    text: "Accommodations"
  }
];

describe("Buttons Toolbar Component", () => {
  it("renders with a list of items", () => {
    render(<ButtonsToolbar items={items} onClick={callBack} selectedItem={""} />);

    const button1 = screen.getByRole("button", {name: /all/i});
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByRole("button", {name: /leaves/i});
    expect(button2).toBeInTheDocument();
    const button3 = screen.getByRole("button", {name: /drafts/i});
    expect(button3).toBeInTheDocument();
    const button4 = screen.getByRole("button", {name: /Accommodations/i});
    expect(button4).toBeInTheDocument();
  });

  it("renders with `leaves` button selected", () => {
    render(<ButtonsToolbar items={items} onClick={callBack} selectedItem={"leaves"} />);

    // eslint-disable-next-line testing-library/no-node-access
    const spanElement = document.querySelector('span[style*="border-bottom: 1px solid #175CD3"]');
    expect(spanElement).toBeInTheDocument();
  });

  it("calls callback function when clicked", () => {
    render(<ButtonsToolbar items={items} onClick={callBack} selectedItem={""} />);

    const button = screen.getByRole("button", {name: /all/i});
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
