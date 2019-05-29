import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import menuCourses from "../fe-tech-data.json";
import Course from "./course";
import {STEPS} from '../constants'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function FullWidthGrid(props) {
  /*eslint array-callback-return: "off"*/
  const { classes, courseStep, coursesSelectedId, addCourses } = props;
  let gridCoursis = [];
  //TODO: use fetch  for get dat of jsonfile
  
  if (courseStep === STEPS.FINISH) {
    
    gridCoursis = []; // delete for visualize all selected

    menuCourses.map(item => {
      coursesSelectedId.map(itemCourseSelected => {
        // id array 

        if (item.id === itemCourseSelected) {
          gridCoursis.push(
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Course
                id={item.id}
                image={item.image}
                title={item.title}
                spiceLevel={item.spiceLevel}
                description={item.description}
                courseType={courseStep}
                isSelect={true}
                coursesSelectedId={coursesSelectedId}
                addCourses={addCourses}
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
        let isSelect = coursesSelectedId.indexOf(item.id) !== -1 ? true : false;
        gridCoursis.push(
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Course
              id={item.id}
              image={item.image}
              title={item.title}
              spiceLevel={item.spiceLevel}
              description={item.description}
              courseType={courseStep}
              isSelect={isSelect}
              coursesSelectedId={coursesSelectedId}
              addCourses={addCourses}
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

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  courseStep:PropTypes.number.isRequired,
  coursesSelectedId:PropTypes.array,
  addCourses:PropTypes.func.isRequired


};

export default withStyles(styles)(FullWidthGrid);
