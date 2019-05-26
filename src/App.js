import React, { Component } from "react";
import "./App.css";

import Courses from "./component/courses";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export default class App extends Component {
  state = {
    activeStep: 0
  };

  getSteps = () => {
    return [
      "Select master blaster campaign settings",
      "Create an ad group",
      "Create an ad"
    ];
  };
  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return "Select campaign settings...";
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Uknown stepIndex";
    }
  };

  render() {
    const steps = this.getSteps();
    const handleNext = actualStep => {
      this.setState({ activeStep: actualStep + 1 });
    };

    const handleBack = actualStep => {
      this.setState({ activeStep: actualStep - 1 });
    };

    const handleReset = () => {
      this.setState({ activeStep: 0 });
    };

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

        <Courses />
      </div>
    );
  }
}
