import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const Two = (props) => {
	const [error, setError] = useState("");

	const validate = () => {
		if ("" == null) setError("Mandatory field, choose one.");
		else {
			setError("");
			props.nextStep();
			// props.userCallback(value);
		}
	};

	return (
		<div className="middle">
			<h2 className="section-heading">
				Do you have an existing identity provider?
			</h2>
			<div>
				<span style={{ color: "red" }}>{error}</span>
			</div>
			<label>
				<input
					type="radio"
					name="authentication"
					value="yes"
					onChange={props.handleStepInfChange}
				/>
				<div className="box">
					<span>Yes</span>
				</div>
			</label>

			<label>
				<input
					type="radio"
					name="authentication"
					value="No"
					onChange={props.handleStepInfChange}
				/>
				<div className="box">
					<span>No</span>
				</div>
			</label>

			<label>
				<input
					type="radio"
					name="authentication"
					value="no-need"
					onChange={props.handleStepInfChange}
				/>
				<div className="box">
					<span>No need for auth</span>
				</div>
			</label>
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default Two;
