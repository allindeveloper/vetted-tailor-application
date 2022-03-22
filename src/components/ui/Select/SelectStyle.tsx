import styled from "styled-components";
import { myTheme } from "styles/theme";
import { device } from "../../../styles/mediaQuery";

export const SelectStyle = styled.div`
  
label {
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.pallete.common.inputLabel};
}
& .select-box {
  position: relative;
  display: block;
  width: 100%;
  font-size: 18px;
  color: #60666d;
  z-index: 999;
  height: 47px;
  border-radius: 7px;
  border: ${(props) => `0.7px solid${props.theme.pallete.common.greyFour}`};
}
& .select-loading {
  margin-left: 70px;
  margin-bottom: 10px;
  margin-top: 18px;
}
& .selectstartIcon {
  position: absolute;
  left: 15px;
  top: 13px;
  cursor: pointer;
  width: 3.5%;

  @media ${device.mobileS} {
    width: auto;
  }
}
& .select-box__current {
  position: relative;
  cursor: pointer;
  outline: none;
  display: flex;
}
& .select-box__current:focus + .select-box__list {
  opacity: 1;
  -webkit-animation-name: none;
          animation-name: none;
}
& .select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
& .select-box__current:focus .select-box__icon {
  -webkit-transform: translateY(-50%) rotate(180deg);
          transform: translateY(-50%) rotate(180deg);
}
& .select-box__icon {
  top: -40%;
  right: 15px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  width: 16px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
}
& .select-box__value {
  display: flex;
}
& .select-box__input {
  display: none;
}
& .select-box__input:checked + .select-box__input-text {
  display: block;
}
& .select-box__input-text {
  display: none;
  width: 100%;
  font-size: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 22px;
 }
& .select-box__list {
  position: absolute;
  width: 100%;
  bottom: 40px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 7px;
  padding: 0;
  height: 200px;
  overflow: scroll;
  list-style: none;
  opacity: 0;
  -webkit-animation-name: HideList;
          animation-name: HideList;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: step-start;
          animation-timing-function: step-start;
}
& .select-box__option {
  display: block;
  padding: 15px;
  background-color: #fff;
}
& .select-box__option:hover, .select-box__option:focus {
  color: #546c84;
}

@-webkit-keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
  }
}

@keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
  }
}
  }
`;
SelectStyle.defaultProps = {
  theme: myTheme,
};
