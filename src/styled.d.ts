import "styled-components";
import { IPalette } from "./types/pallete";

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      common: {
        white: string;
        gray: string;
        lightborder: string;
      };
      primary: IPalette;
    };
  }
}
