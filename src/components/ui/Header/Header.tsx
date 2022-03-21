import backicon from "assets/svg/backicon.svg";
import hamburgericon from "assets/svg/hamburgericon.svg";
import { HeaderStyle } from "./HeaderStyle";

export interface IHeaderProps {
  title: string;
}
export const Header = ({ title }: IHeaderProps) => {
  return (
    <HeaderStyle data-testid="header">
      <div className="leftItem">
        <img src={backicon} alt="back" />
      </div>
      <div>
        <label>{title}</label>
      </div>
      <div className="rightItem">
        <img src={hamburgericon} alt="hamburger" />
      </div>
    </HeaderStyle>
  );
};
