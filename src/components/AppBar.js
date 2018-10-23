import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import MuiAppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";
import { toggleSidebar as toggleSidebarAction } from "../uiActions";
import { logout } from "pages/Login/actions";

import UserMenu from "./UserMenu";
import Headroom from "./Headroom";

const styles = theme => ({
  toolbar: {
    paddingRight: 24
  },
  menuButton: {
    marginLeft: "0.5em",
    marginRight: "0.5em"
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});

const AppBar = ({
  children,
  classes,
  className,
  logout,
  open,
  title,
  toggleSidebar,
  userMenu,
  user,
  width,
  ...rest
}) => (
  <Headroom>
    <MuiAppBar className={className} color="secondary" position="static" {...rest}>
      <Toolbar
        disableGutters
        variant={width === "xs" ? "regular" : "dense"}
        className={classes.toolbar}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          className={classNames(classes.menuButton)}
        >
          <MenuIcon
            classes={{
              root: open ? classes.menuButtonIconOpen : classes.menuButtonIconClosed
            }}
          />
        </IconButton>
        <Typography
          variant="title"
          color="inherit"
          className={classes.title}
          id="react-admin-title"
        >
          {title}
        </Typography>
        {cloneElement(userMenu, { logout: user ? <MenuItem onClick={logout}>Logout</MenuItem> : null })}
      </Toolbar>
    </MuiAppBar>
  </Headroom>
);

AppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  logout: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  userMenu: PropTypes.node,
  user: PropTypes.object,
  width: PropTypes.string
};

AppBar.defaultProps = {
  userMenu: <UserMenu />
};

const mapStateToProps = ({ login }) => ({
  user: login.user
});

const mapDispatchToProps = {
  toggleSidebar: toggleSidebarAction,
  logout
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles),
  withWidth()
);

export default enhance(AppBar);
