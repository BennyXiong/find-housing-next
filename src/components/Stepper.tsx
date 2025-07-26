import React from 'react'
import { GoAFormStepper, GoAFormStep } from "@abgov/react-components";

const Stepper: React.FC = () => {
    
    return (
        <GoAFormStepper testId="foo" onChange={() => { }}>
            <GoAFormStep text="Start"></GoAFormStep>
            <GoAFormStep text="Citizenship"></GoAFormStep>
            <GoAFormStep text="People and ages"></GoAFormStep>
            <GoAFormStep text="Income"></GoAFormStep>
            <GoAFormStep text="Location"></GoAFormStep>
            <GoAFormStep text="Housing options"></GoAFormStep>
        </GoAFormStepper>
    )
}

export default Stepper
