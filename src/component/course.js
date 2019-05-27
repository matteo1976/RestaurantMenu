import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import NewReleasesSharp from "@material-ui/icons/NewReleasesSharp";
import { all } from "rsvp";

export default class Course extends Component {
  state = {
    isSelect: false
  };

  myClasses = {
    card: {
      maxWidth: 350
    },
    media: {
      height: 0,
      paddingTop: "30.25%" // 16:9
    },
    avatar: {
      backgroundColor: "#d80f0f"
    },
    description: {
      minHeight: "6em",
      padding: 0,
      paddingTop: 10
    },
    title: {
      fontSize: "1em",
      minHeight: "2.5em"
    }
  };

  addFavorite = () => {
    const { addCourses, id } = this.props;
    addCourses(id);
    this.setState({ isSelect: !this.state.isSelect });
  };

  componentDidMount() {
    const { isSelect } = this.props;
    this.setState({ isSelect });
  }
  render() {
    const {
      courseType,
      id,
      title,
      image,
      description,
      allery,
      spiceLevel
    } = this.props;

    const myClasses = this.myClasses;
    let favStyle = this.state.isSelect ? { color: "red" } : { color: "grey" };

    return (
      <Card style={myClasses.card}>
        <CardHeader
          style={myClasses.title}
          avatar={
            <Tooltip title="Spice Level">
              <Avatar aria-label="Recipe" style={myClasses.avatar}>
                {spiceLevel}
              </Avatar>
            </Tooltip>
          }
          disableTypography={true}
          title={title}
        />

        <CardMedia style={myClasses.media} image={image} title="Paella dish" />
        <CardContent style={myClasses.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Add to your menu">
            <IconButton onClick={this.addFavorite} style={favStyle}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Icon>
            <NewReleasesSharp />
          </Icon>
          {`  Allery: ${allery.toString()}`}
        </CardActions>
      </Card>
    );
  }
}
