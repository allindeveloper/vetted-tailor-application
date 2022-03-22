import backicon from "assets/svg/backicon.svg";
import hamburgericon from "assets/svg/hamburgericon.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Space } from "../Space/Space";
import { HeaderStyle } from "./HeaderStyle";

export interface IHeaderProps {
  title: string;
  handleGoBack?: () => void;
  showBackButton?: boolean;
  handleClickHamburger?: () => void;
}
export const Header = ({
  title,
  handleGoBack,
  handleClickHamburger,
  showBackButton = true,
}: IHeaderProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <HeaderStyle data-testid="header">
        {showBackButton ? (
          <div
            onClick={handleGoBack ? handleGoBack : goBack}
            className="leftItem"
          >
            <img src={backicon} alt="back" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="title">
          <label>{title}</label>
        </div>
        <div onClick={handleClickHamburger} className="rightItem">
          <img src={hamburgericon} alt="hamburger" />
        </div>
      </HeaderStyle>
      <Space bottom={100} />
    </React.Fragment>
  );
};
