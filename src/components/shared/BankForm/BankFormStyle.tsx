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
  & .retrieving {
    text-align: right;
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: ${(props) => props.theme.pallete.primary.pending};
  }
  & .error {
    text-align: right;
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: ${(props) => props.theme.pallete.primary.error};
  }
  & .success {
    text-align: right;
    display: block;
    font-size: 13px;
    margin-top: 5px;
    color: ${(props) => props.theme.pallete.primary.success};
  }
  & .submitDiv {
    margin-top: 5px;
    text-align: center;
    display: block;
    font-size: 13px;
  }
`;
BankFormStyle.defaultProps = {
  theme: myTheme,
};
