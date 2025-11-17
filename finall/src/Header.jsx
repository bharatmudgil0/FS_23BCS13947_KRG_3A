import React from "react";
import Icon from "./Icon";

function Header({ username }) {
  return (
    <header>
      <h1>My Small App</h1>
      <Icon username={username} />
    </header>
  );
}

export default Header;
