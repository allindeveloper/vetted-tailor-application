import styled from "styled-components";
import { device } from "styles/mediaQuery";
import { myTheme } from "../../../styles/theme";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${(props) => `1px solid ${props.theme.pallete.common.grey}`};
  background-color: ${(props) => props.theme.pallete.common.white};
  @media ${device.mobileS} {
    width: -webkit-fill-available;
  }
  & .title {
    color: ${(props) => props.theme.pallete.primary.defaultBlack};
    font-weight: 400;
    font-size: 16px;
  }
  & .leftItem {
    margin-left: 5px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  & .rightItem {
    margin-right: 5px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

HeaderStyle.defaultProps = {
  theme: myTheme,
};
