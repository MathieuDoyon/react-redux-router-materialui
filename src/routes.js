import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/Home/Home";
import LoginPage from "pages/Login/LoginPage";
import AlbumPage from "pages/Album/AlbumPage";
import PostPage from "pages/Post/PostPage";

import PrivateRoute from "components/PrivateRoute";

const routes = [
  <PrivateRoute key="0" path="/posts" name="PostsPage" component={PostPage} />,
  <PrivateRoute key="1" path="/albums" name="AlbumPage" component={AlbumPage} />,
  <Route key="2" path="/login" name="LoginPage" component={LoginPage} />,
  <Route key="3" path="/" exact name="Home" component={Home} />,
];

export { routes };
