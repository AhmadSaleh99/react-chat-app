import React from "react";
import Attach from "../images/attach.png";
import gallery from "../images/gallery.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type somthing..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={gallery} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
