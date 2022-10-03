import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import { MessageType } from "../types";
import "./Messages.css";

type MessagesProps = {
  messages: MessageType[];
  name: string | null;
};
const Messages = ({ messages, name }: MessagesProps) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
