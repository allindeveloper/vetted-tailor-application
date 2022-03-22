import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Card Component", () => {
  test("render Card", () => {
    render(<Card title="TestCard" />);
    const cardEl = screen.getByTestId("card");

    expect(cardEl).toBeInTheDocument();
  });

  test("render Card Image when showImage is true", () => {
    render(<Card showImage title="TestCard" />);
    const cardImageEl = screen.getByTestId("card-image");

    expect(cardImageEl).toBeInTheDocument();
  });
});
