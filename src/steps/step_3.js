import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const Three = (props) => {
	const [error, setError] = useState("");
	const [useMonitoring, setUseMonitoring] = useState(false);

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (value == "yes") {
			setUseMonitoring(true);
		} else if (value == "no") {
			setUseMonitoring(false);
		}

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
			{useMonitoring && (
				<div>
					<h2 className="section-heading">
						Do you you want a tool to visualize your montoring metrics?
					</h2>
					<label>
						<input
							type="radio"
							name="monitoring-visualization"
							value="yes"
							onChange={handleInput}
						/>
						<div className="box" id="smallbox">
							<span>Yes</span>
						</div>
					</label>
					<label>
						<input
							type="radio"
							name="monitoring-visualization"
							value="no"
							onChange={handleInput}
						/>
						<div className="box" id="smallbox">
							<span>No</span>
						</div>
					</label>
				</div>
			)}
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default Three;
