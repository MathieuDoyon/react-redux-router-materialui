import { AUTHENTICATE, LOGOUT } from "./types";

export const authenticate = () => dispatch => {
  dispatch({
    type: AUTHENTICATE,
    user: {
      id: "1234567890",
      name: "John Doe"
    }
  });
};

export const logout = () => ({
  type: LOGOUT
});
