import React from "react";

import OnlineIcon from "../../icons/online-icon.png";
import CloseIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }: { room: string }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={OnlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={CloseIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
