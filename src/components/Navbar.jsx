import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import { RiWechatFill } from "react-icons/ri";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
        Saleh
        <RiWechatFill />
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
