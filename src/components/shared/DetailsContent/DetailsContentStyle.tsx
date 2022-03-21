import styled from "styled-components";
import { myTheme } from "styles/theme";

export const DetailsContentStyle = styled.div`
  & .lastDiv {
    margin-top: 20px;
    text-align: center;
  }
  & .top-details {
    margin-left: 12%;
    & .name {
      color: ${(props) => props.theme.pallete.primary.heading};
      font-weight: 700;
      font-size: 16px;
    }
  }
  & .gender {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.theme.pallete.common.greyThree};
    font-size: 14px;
    & div:last-child {
      margin-left: 24px;
    }
    p {
      margin-top: 1px;
      padding-top: 1px;
    }
  }
  & .location {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.theme.pallete.common.greyThree};
    font-size: 14px;
    & div:last-child {
      margin-left: 14px;
    }
    p {
      margin-top: 1px;
      padding-top: 1px;
    }
  }

  & .bottom-text {
    font-weight: 700;
    color: ${(props) => props.theme.pallete.common.greyThree};
  }
  & .phone-bottom-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p {
      font-size: 12px;
    }
    img {
      margin-top: 0;
    }
    & .bottom-text {
      margin-left: 14px;
    }
    & .bottom-value {
      margin-left: 14px;
    }
  }

  & .email-bottom-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;
    p {
      font-size: 12px;
    }
    img {
      margin-top: 0;
    }
    & .bottom-text {
      margin-left: 14px;
    }
    & .bottom-value {
      margin-left: 14px;
    }
  }
`;
DetailsContentStyle.defaultProps = {
  theme: myTheme,
};
