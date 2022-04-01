import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import One from "./steps/step_1";
import Two from "./steps/step_2";
import Three from "./steps/step_3";
import Four from "./steps/step_4";
import Result from './components/result'

const Wizard = () => {
	const [stepWizard, setStepWizard] = useState(null);
	const [user, setUser] = useState({});
	const [activeStep, setActiveStep] = useState(0);
	const [information, setInformation] = useState({});
	const [done, setDone] = useState(false)

	const handleStepInfChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInformation({ ...information, [name]: value });
		console.log(information)
	};

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
		setDone(!done);
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
	};

	return (
		<div>
			<Stepper
				styleConfig={styleConfig}
				connectorStyleConfig={connectorStyleConfig}
				activeStep={activeStep}
			>
				<Step label="Deployment environment" />
				<Step label="Authentication" />
				<Step label="Monitoring" />
				<Step label="Visualization of monitoring metrics" />
				<Step label="Result" />
			</Stepper>
			<StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
				<One handleStepInfChange={handleStepInfChange} userCallback={assignUser} />
				<Two handleStepInfChange={handleStepInfChange} user={user} />
				<Three handleStepInfChange={handleStepInfChange} user={user} />
				<Four handleStepInfChange={handleStepInfChange} user={user} completeCallback={handleComplete} />
				<Result information={information} /> 
			</StepWizard>
		</div>
	);
};

export default Wizard;
