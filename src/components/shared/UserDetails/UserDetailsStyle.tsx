import styled from "styled-components";
import { myTheme } from "styles/theme";

export const UserDetailsStyle = styled.div`
  & .content {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    & .left {
      color: ${(props) => props.theme.pallete.common.greyThree};
      font-size: 12px;
      font-weight: 700;
    }
    & .right {
      color: ${(props) => props.theme.pallete.common.gray};
      font-size: 10px;
      font-weight: 400;
    }
    & .contentRight {
      margin-left: 1%;
      position: absolute;
      left: 150px;
      margin-top: 4px;
  }
`;
UserDetailsStyle.defaultProps = {
  theme: myTheme,
};
