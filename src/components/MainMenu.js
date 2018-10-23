import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/albums">
        <button>Albums</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default MainMenu;
