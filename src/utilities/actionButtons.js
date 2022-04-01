import React from "react";
import { Button } from "reactstrap";

const ActionButtons = (props) => {
	const handleBack = () => {
		props.previousStep();
	};

	const handleNext = () => {
		props.nextStep();
	};

	const handleFinish = () => {
		props.completeCallback();
	};

	return (
		<div className="button-container">
			{props.currentStep > 1 && (
				<Button className="previous" onClick={handleBack}>
					Back
				</Button>
			)}
			{props.currentStep < props.totalSteps && (
				<Button className="next" onClick={handleNext}>
					Next
				</Button>
			)}
			{props.currentStep === props.totalSteps && (
				<Button className="finish" onClick={handleFinish}>
					Finish
				</Button>
			)}
		</div>
	);
};

export default ActionButtons;
