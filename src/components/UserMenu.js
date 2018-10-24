import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

class UserMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    logout: PropTypes.node,
    icon: PropTypes.node
  };

  static defaultProps = {
    icon: <AccountCircle />
  };

  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { children, icon, logout } = this.props;
    if (!logout && !children) return null;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Tooltip title={"Tooltip"}>
          <IconButton
            aria-label={"Icon Button"}
            aria-owns={open ? "menu-appbar" : null}
            aria-haspopup={true}
            color="inherit"
            onClick={this.handleMenu}
          >
            {icon}
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={this.handleClose}
        >
          {Children.map(children, menuItem =>
            cloneElement(menuItem, { onClick: this.handleClose })
          )}
          {logout}
        </Menu>
      </div>
    );
  }
}

export default UserMenu;
