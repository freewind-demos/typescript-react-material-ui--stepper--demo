import React, {useState} from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const labels = ['Step 1', 'Step 2', 'Step 3'];

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
      {
        labels.map(label => <Step key={label}><StepLabel>{label}</StepLabel></Step>)
      }
    </Stepper>
    {content(activeStep)}
    {
      activeStep >= labels.length
        ? <Button variant='outlined' onClick={() => setActiveStep(0)}>Reset</Button>
        : <Button variant='outlined' onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
    }

  </div>
}
