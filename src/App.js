import React, { Component } from "react";
import "./App.css";

import Courses from "./component/courses";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class App extends Component {
  state = {
    activeStep: 0
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
      this.setState({ activeStep: 0 });
    };
    const getStepContent = stepIndex => {
      console.log("getstepcontext", stepIndex);
      switch (stepIndex) {
        case 0:
          return "";
        case 1:
          return "";
        case 2:
          return "";
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
          <Grid className="App-header" item xs={12}>
            Menu
          </Grid>
          <Grid className="stepper" item xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>{" "}
          </Grid>
        </Grid>

        <Courses courseStep={activeStep} />
        <div />

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
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
