import emailicon from "assets/svg/emailicon.svg";
import phoneicon from "assets/svg/phoneicon.svg";
import React from "react";
import { DetailsContentStyle } from "./DetailsContentStyle";

const DetailsContent = () => {
  return (
    <DetailsContentStyle>
      <div className="top-details">
        <p className="name">Samuel Oladokun</p>

        <div className="gender">
          <div>
            <p>Gender</p>
          </div>
          <div>
            <p>Male</p>
          </div>
        </div>

        <div className="location">
          <div>
            <p>Location</p>
          </div>
          <div>
            <p>Lagos Nigeria</p>
          </div>
        </div>
      </div>
      <div className="phone-bottom-details">
        <div>
          <img src={phoneicon} alt="phone" />
        </div>
        <div>
          <p className="bottom-text">Phone Number</p>
        </div>
        <div>
          <p className="bottom-value">+2348958484848</p>
        </div>
      </div>

      <div className="email-bottom-details">
        <div>
          <img src={emailicon} alt="email" />
        </div>
        <div>
          <p className="bottom-text">Email Address</p>
        </div>
        <div>
          <p className="bottom-value">samuelolaleye@gmail.com</p>
        </div>
      </div>
    </DetailsContentStyle>
  );
};
export default DetailsContent;
