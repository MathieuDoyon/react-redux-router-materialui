import { REQUEST_ALBUMS, RECEIVE_ALBUMS, FAILED_ALBUMS } from "./types";

export const initialState = {
  loading: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ALBUMS:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_ALBUMS:
      return {
        ...state,
        data: action.result,
        loading: false
      };
    case FAILED_ALBUMS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
