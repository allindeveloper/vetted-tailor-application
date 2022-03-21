import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomInput } from "./Input";

describe("Input Component", () => {
  test("render text input", () => {
    render(<CustomInput name={"searchInput"} id={"search"} />);
    const inputEl = screen.getByTestId("searchInput");

    userEvent.type(inputEl, "Access Bank");
    expect(screen.getByTestId("searchInput")).toHaveValue("Access Bank");

    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("Changing text input value", () => {
    render(<CustomInput name={"searchInput"} id={"search"} />);
    const inputEl = screen.getByTestId("searchInput");

    fireEvent.change(inputEl, { target: { value: "sterling" } });
    expect(screen.getByTestId("searchInput")).toHaveValue("sterling");
  });
});
