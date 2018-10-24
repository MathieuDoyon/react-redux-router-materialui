import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { withRouter } from "react-router";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import compose from "recompose/compose";

import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
// import Error from "./Error";
import defaultTheme from "../defaultTheme";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    position: "relative",
    minWidth: "fit-content",
    width: "100%"
  },
  appFrame: {
    display: "flex",
    flexDirection: "column"
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up("xs")]: {
      paddingLeft: 5
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  }
});

const sanitizeRestProps = ({
  staticContext, // eslint-disable-line no-unused-vars
  history, // eslint-disable-line no-unused-vars
  location, // eslint-disable-line no-unused-vars
  match, // eslint-disable-line no-unused-vars
  computedMatch, // eslint-disable-line no-unused-vars
  ...props
}) => props;

class Layout extends Component {
  state = { hasError: false, errorMessage: null, errorInfo: null };

  constructor(props) {
    super(props);
    /**
     * Reset the error state upon navigation
     *
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */
    props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidCatch(errorMessage, errorInfo) {
    this.setState({ hasError: true, errorMessage, errorInfo });
  }

  render() {
    const {
      appBar,
      children,
      classes,
      className,
      logout,
      menu,
      open,
      sidebar,
      title,
      ...props
    } = this.props;
    return (
      <div
        className={classnames("layout", classes.root, className)}
        {...sanitizeRestProps(props)}
      >
        <div className={classes.appFrame}>
          {createElement(appBar, { title, open, logout })}
          <main className={classes.contentWithSidebar}>
            {createElement(sidebar, {
              children: createElement(menu, { logout })
            })}
            <div className={classes.content}>
              {/* hasError
                ? createElement(error, {
                    error: errorMessage,
                    errorInfo,
                    title
                  })
                : children */}
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string
]);

Layout.propTypes = {
  appBar: componentPropType,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.object,
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  logout: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ]),
  menu: componentPropType,
  open: PropTypes.bool,
  sidebar: componentPropType,
  title: PropTypes.node.isRequired
};

Layout.defaultProps = {
  appBar: AppBar,
  menu: Menu,
  sidebar: Sidebar
};

const mapStateToProps = state => ({
  open: state.ui.sidebarOpen
});

const EnhancedLayout = compose(
  connect(
    mapStateToProps,
    {} // Avoid connect passing dispatch in props
  ),
  withRouter,
  withStyles(styles)
)(Layout);

class LayoutWithTheme extends Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme(props.theme);
  }

  componentDidMount() {
    this.theme = createMuiTheme(this.props.theme);
  }

  render() {
    const { theme, ...rest } = this.props; // eslint-disable-line
    return (
      <MuiThemeProvider theme={this.theme}>
        <EnhancedLayout {...rest} />
      </MuiThemeProvider>
    );
  }
}

LayoutWithTheme.propTypes = {
  theme: PropTypes.object
};

LayoutWithTheme.defaultProps = {
  theme: defaultTheme
};

export default LayoutWithTheme;
