import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "styles/theme";

export const setup = (component: JSX.Element, testId: string) => {
  const utils = render(
    <ThemeProvider theme={myTheme}> {component}</ThemeProvider>,
  );
  const element = utils.getByTestId(testId) as HTMLInputElement;
  return {
    element,
    ...utils,
  };
};
