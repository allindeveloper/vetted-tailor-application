import { render } from "@testing-library/react";
import "jest-styled-components";
import { setup } from "utils/testUtils";
import { Header } from "./Header";

describe("Header Component", () => {
  it("Header renders with correct title", () => {
    const { getByText } = render(<Header />);
    expect(
      getByText(`"The New York Times" article search application`),
    ).toBeInTheDocument();
  });

  it("Header should be black", () => {
    const color = "#18191F";
    const { element } = setup(<Header />, "header");
    expect(element).toHaveStyle(`background: ${color}`);
  });
});
