import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ApiClient from "../../ApiClient";
import clientMiddleware from "../../middleware/clientMiddleware";
import * as actions from "./actions";

const client = new ApiClient();
const middlewares = [thunk, clientMiddleware(client)];
const mockStore = configureMockStore(middlewares);

describe("Albums action creators", () => {
  it("Should dispatch get albums", async () => {
    const expectedAction = [{ type: "ALBUMS/REQUEST_ALBUMS" }];

    const store = mockStore({});

    await store.dispatch(actions.getAlbums());

    expect(store.getActions()).toEqual(expectedAction);
  });
});
