import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jhon</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
