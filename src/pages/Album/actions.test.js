import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ApiClient from "../../ApiClient";
import clientMiddleware from "../../middleware/clientMiddleware";
import * as actions from "./actions";

const client = new ApiClient();
const middlewares = [thunk, clientMiddleware(client)];
const mockStore = configureMockStore(middlewares);

describe("Albums action creators", () => {
  // afterEach(() => {
  //   nock.cleanAll();
  // });

  it("Should dispatch get albums", async () => {
    // nock("https://jsonplaceholder.typicode.com")
    //   .get("/albums")
    //   .reply(200, [
    //     {
    //       id: 1,
    //       title: "Foo Bar",
    //       userId: 1
    //     }
    //   ]);

    const expectedAction = [{ type: "ALBUMS/REQUEST_ALBUMS" }];

    const store = mockStore({});

    await store.dispatch(actions.getAlbums());

    expect(store.getActions()).toEqual(expectedAction);
  });
});
