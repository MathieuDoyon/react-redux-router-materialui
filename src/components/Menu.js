import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import ViewListIcon from "@material-ui/icons/ViewList";
import CameraRollIcon from "@material-ui/icons/CameraRoll";
import HomeIcon from "@material-ui/icons/Home";
import MenuItemLink from "./MenuItemLink";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  }
};

const Menu = ({ classes, className, dense, onMenuClick, ...rest }) => (
  <div className={classnames(classes.main, className)} {...rest}>
    <MenuItemLink
      to={`/`}
      primaryText="Home"
      leftIcon={<HomeIcon />}
      onClick={onMenuClick}
      dense={dense}
    />
    <MenuItemLink
      to={`/posts`}
      primaryText="Posts"
      leftIcon={<ViewListIcon />}
      onClick={onMenuClick}
      dense={dense}
    />
    <MenuItemLink
      to={`/albums`}
      primaryText="Albums"
      leftIcon={<CameraRollIcon />}
      onClick={onMenuClick}
      dense={dense}
    />
  </div>
);

Menu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  dense: PropTypes.bool,
  onMenuClick: PropTypes.func,
  open: PropTypes.bool
};

Menu.defaultProps = {
  onMenuClick: () => null
};

const mapStateToProps = state => ({
  open: state.ui.sidebarOpen
});

const enhance = compose(
  connect(
    mapStateToProps,
    {} // Avoid connect passing dispatch in props,
  ),
  withStyles(styles)
);

export default enhance(Menu);
