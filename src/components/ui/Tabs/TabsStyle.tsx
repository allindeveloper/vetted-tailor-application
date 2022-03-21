import styled from "styled-components";
import { myTheme } from "../../../styles/theme";

export const TabsStyle = styled.div`
  & .tabSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    & .tabItem {
      color: ${(props) => props.theme.pallete.common.gray};
      font-weight: 400;
      font-size: 16px;
    }
    & .selected {
      height: 4px;
      background-color: ${(props) => props.theme.pallete.primary.main};
    }
    & .notselected {
      height: 4px;
      background-color: ${(props) => props.theme.pallete.common.white};
    }
  }
  & .tabContent {
    margin-top: 15px;
  }
`;

TabsStyle.defaultProps = {
  theme: myTheme,
};
