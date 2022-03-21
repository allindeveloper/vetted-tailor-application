import styled from "styled-components";
import { myTheme } from "styles/theme";

export const SuccessStyle = styled.div`
  text-align: center;
  p {
    color: ${(props) => props.theme.pallete.common.grayOne};
  }
  .yay {
    font-size: 30px;
    font-weight: 700;
  }
`;
SuccessStyle.defaultProps = {
  theme: myTheme,
};
