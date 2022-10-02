import React from "react";
import { MessageType } from "../types";

import "./Message.css";
type MessageProps = {
  message: MessageType;
  name: string | null;
};
const Message = ({ message, name }: MessageProps) => {
  const trimmedName = name?.trim().toLowerCase();
  let isSentByCurrentUser = trimmedName === message.user;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{message.text}</p>
      </div>
      <p className="sentText pl-10">{message.user}</p>
    </div>
  );
};

export default Message;
