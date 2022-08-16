import React, { useEffect } from "react";
import io from "socket.io-client";
import { useQuery } from "../../hooks";

import "./Chat.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let socket;
const Chat = () => {
  const name = useQuery().get("name");
  const room = useQuery().get("room");

  useEffect(() => {
    socket = io("http://localhost:5000");
  }, [name, room]);
  return <div>Chat</div>;
};

export default Chat;
