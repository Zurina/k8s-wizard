import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const Three = (props) => {
	const [error, setError] = useState("");

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		props.handleStepInfChange(name, value);
	};

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
				Do you need a monitoring tool to pick up metrics?
			</h2>
			<div>
				<span style={{ color: "red" }}>{error}</span>
			</div>
			<label>
				<input
					type="radio"
					name="monitoring"
					value="yes"
					onChange={handleInput}
				/>
				<div className="box">
					<span>Yes</span>
				</div>
			</label>

			<label>
				<input
					type="radio"
					name="monitoring"
					value="no"
					onChange={handleInput}
				/>
				<div className="box">
					<span>No</span>
				</div>
			</label>
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default Three;
