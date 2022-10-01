import React from "react";

type InputProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (e: any) => void;
};
const Input = ({ message, sendMessage, setMessage }: InputProps) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />

      <button></button>
    </form>
  );
};

export default Input;
