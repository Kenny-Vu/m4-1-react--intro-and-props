import React from "react";

import "./Header.css";

const Header = ({ user, users }) => {
  console.log(users);
  return (
    <header>
      {users
        .filter((account) => account.username !== user.username)
        .map((account) => {
          return (
            <div className="participant">
              <img className="participant-avatar" src={account.avatar} />
              {account.username}
            </div>
          );
        })}
    </header>
  );
};

export default Header;
