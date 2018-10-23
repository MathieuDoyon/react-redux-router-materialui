import reducer, { initialState } from "./reducer";
import * as types from "./types";

describe("Albums Reducer", () => {
  it("should return loading true while request albums", () => {
    expect(reducer(undefined, {})).toEqual(initialState);

    expect(
      reducer(undefined, {
        type: types.REQUEST_ALBUMS
      })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });
});
