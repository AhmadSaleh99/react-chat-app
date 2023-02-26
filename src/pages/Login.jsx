import React from "react";

const Login = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h2 className="appName">SALEH CHAT</h2>
        <p className="title">Register</p>
        <form>
          <input type="email" placeholder="User Email" />
          <input type="password" placeholder="User Password" />

          <button>Sign In</button>
        </form>
        <p>You don't have an accoount? Register</p>
      </div>
    </div>
  );
};

export default Login;
