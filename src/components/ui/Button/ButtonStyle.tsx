import styled from "styled-components";
import { myTheme } from "styles/theme";

export const ButtonStyle = styled.div`
  width: 100%;
  position: relative;
  button {
    box-sizing: content-box;
    outline: none;
    border: none;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 17px;
    padding-right: 17px;
    font-style: italic;
    font-weight: 800;
    border-radius: 7px;
    background-color: ${(props) => props.theme.pallete.primary.main};
    color: ${(props) => props.theme.pallete.common.white};
    &:focus {
      border-color: none;
    }
  }
`;
ButtonStyle.defaultProps = {
  theme: myTheme,
};
