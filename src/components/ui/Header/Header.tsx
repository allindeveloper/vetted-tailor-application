import backicon from "assets/svg/backicon.svg";
import hamburgericon from "assets/svg/hoburgericon.svg";
import { HeaderStyle } from "./HeaderStyle";
export const Header = () => {
  return (
    <HeaderStyle data-testid="header">
      <div>
        <img src={backicon} alt="back" />
      </div>
      <div>
        <label>Profile</label>
      </div>
      <div>
        <img src={hamburgericon} alt="hamburger" />
      </div>
    </HeaderStyle>
  );
};
