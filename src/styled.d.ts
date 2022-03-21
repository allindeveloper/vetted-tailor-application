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
        rootBackgroundColor: string;
        lightborder: string;
      };
      primary: IPalette;
    };
  }
}
