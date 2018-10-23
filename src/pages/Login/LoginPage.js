import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { Redirect } from "react-router-dom";
import { authenticate } from "./actions";

class LoginPage extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  login = () => {
    this.props.authenticate();
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { user } = this.props;

    if (user) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  user: login.user
});

const mapDispatchToProps = dispatch => ({
  authenticate: () => dispatch(authenticate())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // withStyles(styles)
)(LoginPage);
