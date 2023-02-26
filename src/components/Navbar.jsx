import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Saleh Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt="profile"
        />
        <span>Saleh</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
