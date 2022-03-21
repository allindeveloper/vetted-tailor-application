import styled from "styled-components";
import { myTheme } from "styles/theme";
import { appPadding } from "../../../constants/appConstants";

export const BankFormStyle = styled.div`
  padding-left: ${appPadding}, & .top-details {
    margin-left: 12%;
    & .name {
      color: ${(props) => props.theme.pallete.primary.heading};
      font-weight: 700;
      font-size: 16px;
    }
  }
  & .submitDiv {
    text-align: center;
  }
`;
BankFormStyle.defaultProps = {
  theme: myTheme,
};
