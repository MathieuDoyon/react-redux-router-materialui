import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
// // @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { getPosts } from "./actions";

const styles = () => ({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

class PostPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array
  };

  state = {
    cardAnimaton: "cardHidden"
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, classes } = this.props;
    return (
      <Grid container spacing={40}>
        {posts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                  title="Image title"
                />
              </Hidden>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.data
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(PostPage);
