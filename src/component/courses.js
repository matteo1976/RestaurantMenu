import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import menuCourses from "../fe-tech-data.json";
import Course from "./course";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function FullWidthGrid(props) {
  const { classes, courseStep } = props;
  const gridCoursis = [];

  //TODO: usare fetch per prendere dati da json.......

  menuCourses.map(item => {
    let showCourse = false;
    item.courseType.map(itemCourseType => {
      if (itemCourseType === courseStep) {
        showCourse = true;
      }
    });
    if (showCourse) {
      gridCoursis.push(
        <Grid item xs={12} sm={6} md={4}>
          <Course
            image={item.image}
            title={item.title}
            spiceLevel={item.spiceLevel}
            description={item.description}
            courseType={courseStep}
          />
        </Grid>
      );
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {gridCoursis}
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
