import { render } from "@testing-library/react";
import "jest-styled-components";
import { setup } from "utils/testUtils";
import Success from "./Success";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => jest.fn(),
}));
describe("Success Component", () => {
  window.scrollTo = jest.fn();

  it("Success should have an image", () => {
    const { element } = setup(<Success />, "successImage");
    expect(element).toBeInTheDocument();
  });

  it("Success should have a button", () => {
    const { getByTestId } = render(<Success />);
    const button = getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Return to Dashboard");
  });
});
