import { render } from "@testing-library/react";
import "jest-styled-components";
import { setup } from "utils/testUtils";
import { dummyBanks } from "../../../constants/appConstants";
import { Select } from "./Select";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => jest.fn(),
}));
describe("Select Component", () => {
  window.scrollTo = jest.fn();

  it("renders correclty", () => {
    const { element } = setup(
      <Select items={[]} labelText={""} loading={false} />,
      "select",
    );
    expect(element).toBeInTheDocument();
  });

  it("show select loader when loading", () => {
    const { element } = setup(
      <Select items={[]} labelText={""} loading={true} />,
      "select-loader",
    );
    expect(element).toBeInTheDocument();
  });

  it("show items dropdown", () => {
    const { getAllByTestId } = render(
      <Select labelText="Select" loading={false} items={dummyBanks} />,
    );
    expect(getAllByTestId("bank-item")).toHaveLength(1);
  });
});
