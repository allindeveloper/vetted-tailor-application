import styled from "styled-components";
import { device } from "../../../styles/mediaQuery";

export const PageContainerStyle = styled.div`
  @media ${device.laptop} {
    max-width: 600px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
    margin: 0 auto;
  }
  @media ${device.mobileS} {
    margin: 10px;
  }

  margin: 0 auto;
  flex-grow: 1;
  min-height: 100vh;
  h2 {
    font-size: 22px;
  }
`;
