import "styled-components";
import { IPalette } from "./types/pallete";

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      common: {
        white: string;
        gray: string;
        grayOne: string;
        greyThree: string;
        grey: string;
        greyFour: string;
        rootBackgroundColor: string;
        lightborder: string;
        inputLabel: string;
      };
      primary: IPalette;
    };
  }
}
