import { fireEvent, render, screen } from "@testing-library/react";
import { CustomInput } from "./Input";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Input Component", () => {
  test("render text input", () => {
    render(<CustomInput name={"searchInput"} type="number" id={"search"} />);
    const inputEl = screen.getByTestId("searchInput");

    expect(inputEl).toHaveAttribute("type", "number");
  });

  test("Changing text input value", () => {
    render(<CustomInput name={"searchInput"} id={"search"} />);
    const inputEl = screen.getByTestId("searchInput");

    fireEvent.change(inputEl, { target: { value: "sterling" } });
    expect(screen.getByTestId("searchInput")).toHaveValue("sterling");
  });
});
