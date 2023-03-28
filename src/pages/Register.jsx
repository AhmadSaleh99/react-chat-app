import React, { useState } from "react";
import Add from "../images/gallery.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h2 className="appName">SALEH CHAT</h2>
        <p className="title">Register</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="User Email" />
          <input type="password" placeholder="User Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="gallery" />
            insert an avatar
          </label>
          <button>Sign Up</button>
          {err && <span>Somthig went wrong...</span>}
        </form>
        <p>You do have an accoount? Login</p>
      </div>
    </div>
  );
};

export default Register;
