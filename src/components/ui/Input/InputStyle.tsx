import styled from "styled-components";
import { device } from "styles/mediaQuery";
import { myTheme } from "styles/theme";

export const InputStyle = styled.div`
  width: 100%;
  position: relative;
  label {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.pallete.common.inputLabel};
  }
  div {
    position: relative;

    img {
      position: absolute;
      left: 15px;
      top: -4px;
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
    padding-top: 12.83px;
    padding-bottom: 12.5px;
    padding-left: 37px;
    padding-right: 22px;
    border: ${(props) => `0.7px solid${props.theme.pallete.common.greyFour}`};

    border-radius: 7px;
    font-size: 15px;
    &:focus {
      border-color: none;
    }
  }
`;
InputStyle.defaultProps = {
  theme: myTheme,
};
