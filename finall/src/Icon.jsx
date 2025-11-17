import React from "react";
import UserProfile from "./UserProfile";

function Icon({ username }) {
  return (
    <div>
      <UserProfile username={username} />
    </div>
  );
}

export default Icon;
