import React, {useState} from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

export default function MyList() {
  const [activeStep, setActiveStep] = useState(0)

  function content(activeStep: number) {
    switch (activeStep) {
      case 0 :
        return <div>Content of step 1</div>
      case 1:
        return <div>Content of step 2</div>
      case 2:
        return <div>Content of step 3</div>
    }
  }

  return <div>
    <Stepper activeStep={activeStep} alternativeLabel>
      <Step><StepLabel>Step 1</StepLabel></Step>
      <Step><StepLabel>Step 2</StepLabel></Step>
      <Step><StepLabel>Step 3</StepLabel></Step>
    </Stepper>
    {content(activeStep)}
    {
      activeStep >= 3
        ? <Button variant='outlined' onClick={() => setActiveStep(0)}>Reset</Button>
        : <Button variant='outlined' onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
    }

  </div>
}
