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

export default class Course extends Component {
  myClasses = {
    card: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: "46.25%" // 16:9
    },
    avatar: {
      backgroundColor: "#d80f0f"
    }
  };

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
    return (
      <Card className={myClasses.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={myClasses.avatar}>
              {courseType.toString()}{" "}
            </Avatar>
          }
          title={title}
          subheader={` Spice Level ${spiceLevel}`}
        />
        <CardMedia style={myClasses.media} image={image} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Icon aria-label="Add to favorites">
            <FavoriteIcon />
          </Icon>
        </CardActions>
      </Card>
    );
  }
}
