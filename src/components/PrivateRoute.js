import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import compose from "recompose/compose";

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = ({ login }) => ({
  user: login.user
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(PrivateRoute);
