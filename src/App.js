import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import Courses from "./component/courses";
import { COURSES, STEPS } from "./constants";
import logo from "./img/logo.jpg";

export default class App extends Component {
  state = {
    activeStep: STEPS.APPETITAIZER,
    coursesSelected: []
  };

  menageCourses = id => {
    let { coursesSelected } = this.state;
    if (coursesSelected.indexOf(id) === -1) {
      coursesSelected.push(id);
      this.setState({ coursesSelected });
    } else coursesSelected.splice(coursesSelected.indexOf(id), 1);
    this.setState({ coursesSelected });
  };
  render() {
    const handleNext = () => {
      let actualStep = this.state.activeStep;

      this.setState({ activeStep: actualStep + 1 });
    };

    const handleBack = () => {
      let actualStep = this.state.activeStep;
      this.setState({ activeStep: actualStep - 1 });
    };

    const handleReset = () => {
      this.setState({ activeStep: STEPS.APPETITAIZER });
    };
    const getStepContent = stepIndex => {
      switch (stepIndex) {
        case STEPS.APPETITAIZER:
          return COURSES.APPETITAIZER;
        case STEPS.SOUP:
          return COURSES.SOUP;
        case STEPS.FISH:
          return COURSES.FISH;
        case STEPS.SALAD:
          return COURSES.SALAD;
        case STEPS.MAIN_COURSE:
          return COURSES.MAIN_COURSE;
        case STEPS.DESSERT:
          return COURSES.DESSERT;
        case STEPS.MENU:
          return COURSES.MENU;

        default:
          return "Uknown stepIndex";
      }
    };
    const steps = [
      "Hors d'oeuvres ",
      "Soup",
      "Fish",
      "Salad",
      "Main course",
      "Dessert"
    ];

    const { activeStep } = this.state;
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <img src={logo} width="150px" height="auto" />
          </Grid>
          <Grid className="App-header" item xs={10}>
            <span>Menu</span>
          </Grid>

          <Grid className="stepper" item xs={12}>
            <Grid
              container
              alignItems={"center"}
              direction={"row"}
              justify={"center"}
            >
              <Stepper
                style={{ margin: "auto", width: "90%" }}
                activeStep={activeStep}
                alternativeLabel
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>{" "}
            </Grid>
          </Grid>
        </Grid>
        <div style={{ width: "70%", margin: "auto" }}>
          <Courses
            courseStep={activeStep}
            coursesSelected={this.state.coursesSelected}
            addCourses={this.menageCourses}
          />
        </div>
        <div />
        <div className="stepControl">
          {activeStep === steps.length ? (
            <div>
              <Typography className="instructions">
                All steps completed
              </Typography>

              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className="instructions">
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="backButton"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
