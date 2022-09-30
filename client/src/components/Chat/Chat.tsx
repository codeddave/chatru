import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useQuery } from "../../hooks";

import "./Chat.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type MessageType = {
  user: string;
  text: string;
};
let socket: any;
const Chat = () => {
  const name = useQuery().get("name");
  const room = useQuery().get("room");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io("localhost:5000");
    socket.emit("join", { name, room }, ({ error }: any) => {
      alert(error);
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
  return <div>Chat</div>;
};

export default Chat;
