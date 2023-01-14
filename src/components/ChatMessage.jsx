import React, { useState } from "react";
import { AiOutlineSend, AiFillRobot } from "react-icons/ai";
import "../styles/PopupChat.css";
import axios from "axios"

export const PopChat = (props) => {
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };
  let textRef = React.createRef();
  const { messages } = props;

  const [chatopen, setChatopen] = useState(false);
  const toggle = (e) => {
    setChatopen(!chatopen);
  };

  const handleSend = (e) => {
    
    const get = props.getMessage;
    const set = props.setMessage;
    get(textRef.current.value);
    set(textRef.current.value);
    

    const body = JSON.stringify({ "message": textRef.current.value });
    textRef.current.value = ''
    var authOptions = {
        method: "post",
        url: "http://127.0.0.1:8000/api/chat",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      };

        axios(authOptions)
           .then((response) => {
                console.log(response.data)
              set(response.data.response);
           })
           .catch((err) => {
              console.log(err);
           }); 
  };




  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Chat Bot</div>
        <div  className="msg-area">
          {messages.map((msg, i) =>
            i % 2 ? (
              <p key={msg}className="right">
                <span >{msg}</span>
              </p>
            ) : (
              <p key={msg}className="left">
                <span >{msg}</span>
              </p>
            )
          )}
        </div>
        <div className="footer">
          <input type="text" ref={textRef} />
          <button onClick={handleSend}>
            <i>
              <AiOutlineSend />
            </i>
          </button>
        </div>
      </div>
      <div className="pop">
        <p>
          <AiFillRobot size={70} onClick={toggle}/>
        </p>
      </div>
    </div>
  );
};

export default PopChat;
