import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import compose from "recompose/compose";
// // @material-ui/core components
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getPost } from "pages/Post/actions";

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit
  }
});

const archives = [
  "March 2020",
  "February 2020",
  "January 2020",
  "December 2019",
  "November 2019",
  "October 2019",
  "September 2019",
  "August 2019",
  "July 2019",
  "June 2019",
  "May 2019",
  "April 2019"
];

const social = ["GitHub", "Twitter", "Facebook"];

class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object
  };

  componentDidMount() {
    // get a random ID
    const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    this.props.getPost(id);
  }

  render() {
    const { post, classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        {/* Main featured post */}
        {post && (
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {post.body}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        )}
        {/* End main featured post */}
        <Grid container spacing={40} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              From the Firehose
            </Typography>
            <Button component={Link} to="/posts" variant="contained" color="primary" className={classes.button}>
              Posts
            </Button>
            <Button component={Link} to="/albums" variant="contained" color="secondary" className={classes.button}>
              Albums
            </Button>
          </Grid>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
              </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Archives
            </Typography>
            {archives.map(archive => (
              <Typography key={archive}>{archive}</Typography>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Social
            </Typography>
            {social.map(network => (
              <Typography key={network}>{network}</Typography>
            ))}
          </Grid>
          {/* End sidebar */}
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  post: posts.post
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Home);
