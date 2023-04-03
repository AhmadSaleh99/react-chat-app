import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h2 className="appName">SALEH CHAT</h2>
        <p className="title">Register</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="User Email" />
          <input type="password" placeholder="User Password" />

          <button>Sign In</button>
          {err && <span>Somthig went wrong...</span>}
        </form>
        <p>
          You don't have an accoount? <Link to="/register">Register </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
