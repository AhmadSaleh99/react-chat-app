import React from "react";
import Add from "../images/gallery.png";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h2 className="appName">SALEH CHAT</h2>
        <p className="title">Register</p>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="User Email" />
          <input type="password" placeholder="User Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="gallery" />
            insert an avatar
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an accoount? Login</p>
      </div>
    </div>
  );
};

export default Register;
