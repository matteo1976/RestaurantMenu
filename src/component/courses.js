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
  /*eslint array-callback-return: "off"*/
  const { classes, courseStep, coursesSelected, addCourses } = props;
  let gridCoursis = [];
  //TODO: usare fetch per prendere dati da json.......
  //
  if (courseStep === 6) {
    //TODO: mettere una costante per ultimo step
    gridCoursis = []; // delete for visualize all selected

    menuCourses.map(item => {
      coursesSelected.map(itemCourseSelected => {
        // array con gli id

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
                coursesSelected={coursesSelected}
                addCourses={addCourses}
                allery={item.allery}
              />
            </Grid>
          );
        }
      });
    });
  } else {
    menuCourses.map(item => {
      let showCourse = false;
      item.courseType.map(itemCourseType => {
        if (itemCourseType === courseStep) {
          showCourse = true;
        }
      });
      if (showCourse) {
        let isSelect = coursesSelected.indexOf(item.id) !== -1 ? true : false;
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
              coursesSelected={coursesSelected}
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
