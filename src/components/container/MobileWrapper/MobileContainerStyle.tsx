import styled from "styled-components";
import { appPadding } from "../../../constants/appConstants";
import { device } from "../../../styles/mediaQuery";

export const MobileContainerStyle = styled.div`
  @media ${device.laptop} {
    display: none;
  }

  @media ${device.desktop} {
    max-width: 1400px;
    margin: 0 auto;
    display: none;
  }
  @media ${device.mobileS} {
    margin-left: ${appPadding};
    margin-right: ${appPadding};
    margin-bottom: ${appPadding};
    margin-top: 100px;
  }

  margin: 0 auto;
  flex-grow: 1;
  min-height: 100vh;
  margin: ${appPadding};
  h2 {
    font-size: 22px;
  }
`;
