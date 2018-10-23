import { AUTHENTICATE, LOGOUT } from "./types";

const initialState = {
  user: null,
  redirectTo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: action.user,
        redirectTo: action.redirectTo
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
