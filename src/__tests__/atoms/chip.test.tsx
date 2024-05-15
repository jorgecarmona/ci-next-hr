import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Chip from "../../atoms/chip";


describe("Chip Component", () => {
  it("renders with default properties", () => {
    render(<Chip label="default"/>);

    const chip = screen.getByText("default" );
    expect(chip).toHaveClass("MuiChip-label");
  });

  it("calls onClick callback function when clicked", () => {
    const handleClick = jest.fn();
    render(<Chip label="Clickable Chip" onClick={handleClick} />);
    const chip = screen.getByRole("button", { name: "Clickable Chip" });
    userEvent.click(chip);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete callback function when delete icon is clicked", () => {
    const handleDelete = jest.fn();
    render(<Chip label="Clickable Chip" onDelete={handleDelete} />);
    
    // Usamos getByTestId para encontrar el ícono de eliminación
    const deleteIcon = screen.getByTestId("CancelIcon");
    userEvent.click(deleteIcon);
    
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("renders as outlined chip with delete icon", () => {
    const handleDelete = jest.fn();
    render(<Chip type="outlined" label="Outlined Chip with Delete" onDelete={handleDelete} />);
    
    const chip = screen.getByText("Outlined Chip with Delete");
    expect(chip).toBeInTheDocument();

    const deleteIcon = screen.getByTestId("CancelIcon");
    expect(deleteIcon).toBeInTheDocument();

    userEvent.click(deleteIcon);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
