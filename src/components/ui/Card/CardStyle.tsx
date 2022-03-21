import styled from "styled-components";
import { myTheme } from "../../../styles/theme";

export const CardStyle = styled.div`
  border-radius: 20px;
  padding-top: 4px;
  padding-bottom: 23px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.pallete.common.white};
  padding-left: 10px;
  padding-right: 10px;
  & .title {
    margin-top: 20px;
    text-align: center;
    color: ${(props) => props.theme.pallete.primary.black};
  }
  img {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 2.5vh;
  }
`;

CardStyle.defaultProps = {
  theme: myTheme,
};
