import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("render button", () => {
    render(
      <Button name={"button"} title="Return to Dashboard" id={"buttonClick"} />,
    );
    const buttonEl = screen.getByTestId("button");

    expect(screen.getByTestId("button")).toHaveTextContent(
      /^Return to Dashboard$/,
    );

    expect(buttonEl).toHaveAttribute("id", "buttonClick");
  });
});
