import {
  SIMPLE_ACTION,
  // posts list
  REQUEST_POSTS,
  RECEIVE_POSTS,
  FAILED_POSTS,
  // Get single post
  REQUEST_POST,
  RECEIVE_POST,
  FAILED_POST
} from "./types";

export const simpleAction = () => dispatch => {
  dispatch({
    type: SIMPLE_ACTION,
    payload: "Foo bar"
  });
};

export const getPosts = () => dispatch => {
  dispatch({
    types: [REQUEST_POSTS, RECEIVE_POSTS, FAILED_POSTS],
    promise: client => client.get("/posts")
  });
};

export const getPost = id => dispatch => {
  dispatch({
    types: [REQUEST_POST, RECEIVE_POST, FAILED_POST],
    promise: client => client.get(`/posts/${id}`)
  });
};
