import { combineReducers } from "redux";
import albums from "pages/Album/reducer";
import posts from "pages/Post/reducer";
import login from "pages/Login/reducer";
import ui from "./uiReducer";

export default combineReducers({
  albums,
  posts,
  login,
  ui
});
