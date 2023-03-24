import React from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="Camera" />
          <img src={Add} alt="Add" />
          <img src={More} alt="More" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
