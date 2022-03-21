import styled from "styled-components";
import { device } from "styles/mediaQuery";
import { myTheme } from "../../../styles/theme";

export const HeaderStyle = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.pallete.primary.main};
  p {
    font-weight: 600;
    color: ${(props) => props.theme.pallete.common.white};
  }
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  letter-spacing: 3px;
  @media ${device.mobileS} {
    width: 100%;
  }
`;

HeaderStyle.defaultProps = {
  theme: myTheme,
};
