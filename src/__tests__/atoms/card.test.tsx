import {render, screen} from "@testing-library/react";

import Card from "../../atoms/card";

import {iconLookup} from "../../atoms/icon-store";
import {CardHeader, IconButton} from "@mui/material";

const myCardHeader = (
  <CardHeader
    avatar={<iconLookup.business />}
    action={
      <IconButton>
        <iconLookup.add />
      </IconButton>
    }
    title="Card with Node as header"
  />
);

describe("Card Component", () => {
  it("renders with default properties", () => {
    render(<Card content="Card with default properties"></Card>);

    const card = screen.getByText("Card with default properties");
    expect(card).toHaveClass("MuiCardContent-root");
    expect(card).toHaveStyle("background-color: rgb\\(255, 255, 255\\)");
    expect(card).toHaveStyle("border-color: rgb\\(234, 236, 240\\)");
  });

  it("renders with light background color #FCFCFD", () => {
    render(
      <Card
        content="Card with light background color"
        bgColor="#FCFCFD"
        borderColor="#D0D5DD"
      ></Card>
    );

    const card = screen.getByText("Card with light background color");
    expect(card).toHaveStyle("background-color: rgb\\(252, 252, 253\\)");
  });

  it("renders with dark background color #EAEFF6", () => {
    render(
      <Card
        content="Card with dark background color"
        bgColor="#EAEFF6"
        borderColor="#D4DFEF"
      ></Card>
    );

    const card = screen.getByText("Card with dark background color");
    expect(card).toHaveStyle("background-color: rgb\\(234, 239, 246\\)");
  });

  it("renders with string as header", () => {
    render(
      <Card
        header="Card with string as header"
        content="Card content"
        bgColor="#EAEFF6"
        borderColor="#D4DFEF"
      ></Card>
    );

    const card = screen.getByText(/Card with string as header/i);
    expect(card).toHaveTextContent(/card with string as header/i);
    expect(card).toHaveStyle("background-color: rgb\\(234, 239, 246\\)");
  });

  it("renders with Node as header", () => {
    render(
      <Card
        header={myCardHeader}
        content="Card content"
        bgColor="#EAEFF6"
        borderColor="#D4DFEF"
      ></Card>
    );

    const card = screen.getByRole("button");
    expect(card).toHaveClass("MuiIconButton-root");

    const cardHeader = screen.getByText(/card with node as header/i);
    expect(cardHeader).toHaveTextContent(/card with Node as header/i);

    const headerIcon = screen.getByTestId("WorkOutlineOutlinedIcon");
    expect(headerIcon).toHaveClass("MuiSvgIcon-root");
  });
});
