//grid with cards/ courses for each type of course
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import menuCourses from "../fe-tech-data.json";
import Dishe from "./dishe";
import {STEPS} from '../constants'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function Dishes(props) {
  /*eslint array-callback-return: "off"*/
  const { classes, courseStep, dishesSelectedId, menageDishes } = props;
  let gridCoursis = [];
  //TODO: use fetch  for get dat of jsonfile
  
  if (courseStep === STEPS.FINISH) {
    
    gridCoursis = []; // delete for visualize all selected

    menuCourses.map(item => {
      dishesSelectedId.map(itemCourseSelected => {
        // id array 

        if (item.id === itemCourseSelected) {
          gridCoursis.push(
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Dishe
                id={item.id}
                image={item.image}
                title={item.title}
                spiceLevel={item.spiceLevel}
                description={item.description}
                courseType={courseStep}
                isSelect={true}
                dishesSelectedId={dishesSelectedId}
                menageDishes={menageDishes}
                allery={item.allery}
              />
            </Grid>
          );
        }
      });
    });
  } else {
    // scan for visualise only course of actual section
    menuCourses.map(item => {
      let showCourse = false;
      item.courseType.map(itemCourseType => {
        if (itemCourseType === courseStep) {
          showCourse = true;
        }
      });
      if (showCourse) {
        let isSelect = dishesSelectedId.indexOf(item.id) !== -1 ? true : false;
        gridCoursis.push(
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Dishe
              id={item.id}
              image={item.image}
              title={item.title}
              spiceLevel={item.spiceLevel}
              description={item.description}
              courseType={courseStep}
              isSelect={isSelect}
              dishesSelectedId={dishesSelectedId}
              menageDishes={menageDishes}
              allery={item.allery}
            />
          </Grid>
        );
      }
    });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {gridCoursis}
      </Grid>
    </div>
  );
}

Dishes.propTypes = {
  classes: PropTypes.object.isRequired,
  courseStep:PropTypes.number.isRequired,
  dishesSelectedId:PropTypes.array,
  menageDishes:PropTypes.func.isRequired


};

export default withStyles(styles)(Dishes);
