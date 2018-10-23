import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "components/Layout";
import { routes } from "./routes";
import ApiClient from "./ApiClient";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";

import "assets/material-kit-react.css";

var history = createBrowserHistory();
const client = new ApiClient();

ReactDOM.render(
  <Provider store={configureStore(client)}>
    <Router history={history}>
      <Switch>
        <Layout title="React Router Redux - Material UI">{routes}</Layout>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
