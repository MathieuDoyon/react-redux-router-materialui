import {
  SIMPLE_ACTION,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  FAILED_POSTS,
  REQUEST_POST,
  RECEIVE_POST,
  FAILED_POST
} from "./types";

const initialState = {
  loading: false,
  data: [],
  post: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...state,
        result: action.payload
      };
    // Posts list
    case REQUEST_POSTS:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        data: action.result,
        loading: false
      };
    case FAILED_POSTS:
      return {
        ...state,
        loading: false
      };
    // Single post
    case REQUEST_POST:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_POST:
      return {
        ...state,
        post: action.result,
        loading: false
      };
    case FAILED_POST:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
