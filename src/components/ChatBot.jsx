import React, { useState } from "react";
import "../styles/ChatBot.css";
import Chat from "./ChatMessage"


const ChatBot = (props) => {
  const [msg, setMessage] = useState([])

  const getMessage = (msg) => {
    console.log(msg)
  }

  const handleChange = (newValue) => {
    setMessage((msg) => [...msg, newValue])

  } 

  return (
    <div className="Chatbot">

      <Chat messages={msg} getMessage={getMessage} setMessage={handleChange}/>
    </div>
  );
};

export default ChatBot;
