import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import One from "./steps/step_1";
import Two from "./steps/step_2";
import Three from "./steps/step_3";
import Four from "./steps/step_3";

const Wizard = () => {
	const [stepWizard, setStepWizard] = useState(null);
	const [user, setUser] = useState({});
	const [activeStep, setActiveStep] = useState(0);

	const assignStepWizard = (instance) => {
		setStepWizard(instance);
	};

	const assignUser = (val) => {
		console.log("parent receive user callback");
		console.log(val);
		setUser((user) => ({
			...user,
			...val,
		}));
	};

	const handleStepChange = (e) => {
		console.log("step change");
		console.log(e);
		setActiveStep(e.activeStep - 1);
	};

	const handleComplete = () => {
		alert("You r done. TQ");
	};

	const styleConfig = {
		activeBgColor: "#3371e3",
		completedBgColor: "#184699",
	};

	const connectorStyleConfig = {
		color: "#e3d5d5",
		completedColor: "#184699",
		style: "dashed",
		size: 2,
	}

	return (
		<div>
			<Stepper styleConfig={styleConfig} connectorStyleConfig={connectorStyleConfig} activeStep={activeStep}>
				<Step label="Deployment environment" />
				<Step label="Authentication" />
				<Step label="Monitoring" />
				<Step label="Visualization of monitoring metircs" />
			</Stepper>
			<StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
				<One userCallback={assignUser} />
				<Two user={user} />
				<Three user={user} />
				<Four user={user} completeCallback={handleComplete} />
			</StepWizard>
		</div>
	);
};

export default Wizard;
