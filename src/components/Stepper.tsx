import React, { useEffect, useState } from 'react'
import { GoAFormStepper, GoAFormStep } from "@abgov/react-components";
import { useNavigate } from 'react-router-dom';

const routePaths = [
  "/",
  "/citizenship",
  "/peopleAndAge",
  "/income",
  "/location",
  "/housingOptions"
];

const Stepper: React.FC = () => {
    const navigate = useNavigate();
	const [step, setStep] = useState<number>();

    useEffect(() => {
        setStep(routePaths.indexOf(location.pathname) + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return (
        <GoAFormStepper testId="foo" step={step} onChange={(i) => navigate(routePaths[i - 1])}>
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
