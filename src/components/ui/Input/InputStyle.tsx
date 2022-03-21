import styled from "styled-components";
import { device } from "styles/mediaQuery";
import { myTheme } from "styles/theme";

export const InputStyle = styled.div`
  width: 100%;
  position: relative;
  label {
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.theme.pallete.common.inputLabel};
  }
  div {
    position: relative;

    img {
      position: absolute;
      left: 15px;
      top: 8px;
      cursor: pointer;
      width: 3.5%;
      @media ${device.mobileS} {
        width: auto;
      }
    }
  }
  input {
    box-sizing: content-box;
    outline: none;
    width: -webkit-fill-available;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: ${(props) => `1px solid${props.theme.pallete.common.greyFour}`};

    border-radius: 2px;
    font-size: 15px;
    &:focus {
      border-color: none;
    }
  }
`;
InputStyle.defaultProps = {
  theme: myTheme,
};
