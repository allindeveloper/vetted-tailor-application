import React from "react";
import { UserDetailsStyle } from "./UserDetailsStyle";

const UserDetails = () => {
  return (
    <UserDetailsStyle>
      <div className="content">
        <div>
          <p className="left">Name:</p>
        </div>
        <div className="contentRight">
          <p className="right">Samuel Oladokun</p>
        </div>
      </div>
      <div className="content">
        <div>
          <p className="left">Gender:</p>
        </div>
        <div className="contentRight">
          <p className="right">Male</p>
        </div>
      </div>
      <div className="content">
        <div>
          <p className="left">Sew Gender:</p>
        </div>
        <div className="contentRight">
          <p className="right">Both</p>
        </div>
      </div>

      <div className="content">
        <div>
          <p className="left">Phone Number:</p>
        </div>
        <div className="contentRight">
          <p className="right">08137901372</p>
        </div>
      </div>

      <div className="content">
        <div>
          <p className="left">Email Address:</p>
        </div>
        <div className="contentRight">
          <p className="right">biola@fitted.ng</p>
        </div>
      </div>
      <div className="content">
        <div>
          <p className="left">Store Name:</p>
        </div>
        <div className="contentRight">
          <p className="right">Skibi Fashion House</p>
        </div>
      </div>

      <div className="content">
        <div>
          <p className="left">Store Location:</p>
        </div>
        <div className="contentRight">
          <p className="right">Lagos, NIgeria</p>
        </div>
      </div>
    </UserDetailsStyle>
  );
};
export default UserDetails;
