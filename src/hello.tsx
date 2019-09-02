import React, {useState} from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const stepperConfig = [
  {
    label: 'Step 1',
    component: <div>Content of step 1</div>
  },
  {
    label: 'Step 2',
    component: <div>Content of step 2</div>
  },
  {
    label: 'Step 3',
    component: <div>Content of step 3</div>
  }
]

export default function MyList() {
  const [activeStep, setActiveStep] = useState(0)

  return <div>
    <Stepper activeStep={activeStep} alternativeLabel>
      {
        stepperConfig.map(it => it.label).map(label => <Step key={label}><StepLabel>{label}</StepLabel></Step>)
      }
    </Stepper>
    {stepperConfig[activeStep].component}
    {
      activeStep >= stepperConfig.length
        ? <Button variant='outlined' onClick={() => setActiveStep(0)}>Reset</Button>
        : <Button variant='outlined' onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
    }
  </div>
}
