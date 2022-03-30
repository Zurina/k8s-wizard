import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const Four = (props) => {
	const [value, setValue] = useState(null);
	const [error, setError] = useState("");

	const onInputChanged = (event) => {
		const targetName = event.target.name;
		const targetValue = event.target.value;

		setValue((value) => ({
			...value,
			[targetName]: targetValue,
		}));
		console.log(value);
	};

	const validate = () => {
		if (value == null) setError("Mandatory field, choose one.");
		else {
			setError("");
			props.nextStep();
			props.userCallback(value);
		}
	};

	return (
		<div className="middle">
			<h2 className="section-heading">
            Do you you want a tool to visualize your montoring metrics?
			</h2>
            <div>
				<span style={{ color: "red" }}>{error}</span>
			</div>
			<label>
				<input type="radio" name="monitoring-visualization" value="yes" onChange={onInputChanged} />
				<div className="box">
					<span>Yes</span>
				</div>
			</label>

			<label>
				<input type="radio" name="monitoring-visualization" value="no" onChange={onInputChanged} />
				<div className="box">
					<span>No</span>
				</div>
			</label>
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default Four;
