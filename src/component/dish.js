// this is the single card

import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import NewReleasesSharp from "@material-ui/icons/NewReleasesSharp";
import Add from '@material-ui/icons/Add';
import PropTypes from "prop-types";


export default class Dish extends Component {
  static propTypes = {
    id:PropTypes.number.isRequired,
    image:PropTypes.string,
    title:PropTypes.string,
    spiceLevel:PropTypes.number,
    description:PropTypes.string,
    courseType:PropTypes.number,
    isSelect:PropTypes.bool,
    menageDishes:PropTypes.func.isRequired,
    allery:PropTypes.array,
  };

  state = {
    isSelect: false,
    raised: false
  };

  myClasses = {
    card: {
      maxWidth: 350,
    },
    media: {
      height: 0,
      paddingTop: "30.25%" // 16:9
    },
    avatar: {
      backgroundColor: "#C24641"
    },
    description: {
      minHeight: "6em",
      padding: 0,
      paddingTop: 10
    },
    title: {
      fontSize: "1em",
      minHeight: "2.5em"
    },
    action:{
      fontSize:"0.8em"
    }
  };

  componentDidMount() {
    const { isSelect } = this.props;
    this.setState({ isSelect });
  }

  //shadow effect onMouseOver onMouseOut
  toggleRaised = () => this.setState({ raised: !this.state.raised });

  addFavorite = () => {
    const { menageDishes, id,courseType } = this.props;
    menageDishes(id,courseType);
    this.setState({ isSelect: !this.state.isSelect });
  };

  render() {
    const { title, image, description, allery, spiceLevel } = this.props;
    var pepper = "\u{1f336}";
    const myClasses = this.myClasses;

    let favStyle = this.state.isSelect ? { color: "red" } : { color: "grey" };


    //if (this.state.isSelect) { myClasses.card.backgroundColor= "#ead5d5"  }else{ myClasses.card.backgroundColor="white" };
    
    // visual allergy if there are
    let allergyIcons =
      allery.length > 0 ? (
        <>
          <Icon>
            <NewReleasesSharp />
          </Icon>
          Allergy: {allery.toString()}
        </>
      ) : null;

      
    let spiceLevelIcon='';
    for (let index = 0; index < spiceLevel; index++) {
      spiceLevelIcon +=pepper +' '       
    }
    return (
      <Card
        onMouseOver={this.toggleRaised}
        onMouseOut={this.toggleRaised}
        raised={this.state.raised}
        onClick={this.addFavorite}
        //className={myClasses.card}
        style={myClasses.card}
      >
        <CardHeader
          style={myClasses.title}
          avatar={
            <Tooltip title="Add to your menu">
              <Avatar aria-label="Recipe" style={myClasses.avatar}>
                <Icon><Add/></Icon>
                
              </Avatar>
            </Tooltip>
          }
          disableTypography={true}
          title={title}
        />

        <CardMedia style={myClasses.media} image={image} title={title} />
        <CardContent style={myClasses.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions style={myClasses.action}>
          <Tooltip title="your choice ">
            <IconButton style={favStyle}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          {allergyIcons}

          <Tooltip title="Spice level ">
            <span style={{marginLeft:"10%"}}>{spiceLevelIcon}</span>
          </Tooltip>

        </CardActions>
      </Card>
    );
  }
}
