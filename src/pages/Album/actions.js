import { REQUEST_ALBUMS, RECEIVE_ALBUMS, FAILED_ALBUMS } from "./types";

export const getAlbums = () => dispatch => {
  dispatch({
    types: [REQUEST_ALBUMS, RECEIVE_ALBUMS, FAILED_ALBUMS],
    promise: client => client.get("/albums")
  });
};
