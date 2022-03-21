import { render } from "@testing-library/react";
import "jest-styled-components";
import { setup } from "utils/testUtils";
import { Header } from "./Header";

describe("Header Component", () => {
  it("Header renders with correct title", () => {
    const { getByText } = render(<Header title={"Profile"} />);
    expect(getByText(`Profile`)).toBeInTheDocument();
  });

  it("Header should be black", () => {
    const color = "#FFFFFF";
    const { element } = setup(<Header title={"Profile"} />, "header");
    expect(element).toHaveStyle(`background: ${color}`);
  });
});
