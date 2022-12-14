import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useQuery } from "../../hooks";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import { MessageType } from "../types";
import "./Chat.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

let socket: any;
const Chat = () => {
  const name = useQuery().get("name");
  const room = useQuery().get("room");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io("localhost:5000");
    socket.emit("join", { name, room }, (error: any) => {
      if (error) alert(error);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message: MessageType) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (message) {
      // send message and clear input
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/*    <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        /> */}
      </div>
    </div>
  );
};

export default Chat;
