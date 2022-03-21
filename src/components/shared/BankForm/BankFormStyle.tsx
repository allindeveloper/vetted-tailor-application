import styled from "styled-components";
import { myTheme } from "styles/theme";

export const BankFormStyle = styled.div`
  & .top-details {
    margin-left: 12%;
    & .name {
      color: ${(props) => props.theme.pallete.primary.heading};
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
BankFormStyle.defaultProps = {
  theme: myTheme,
};
