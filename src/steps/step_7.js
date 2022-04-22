import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const Seven = (props) => {
	const [error, setError] = useState("");
	const [useLogging, setUseLogging] = useState(false);

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (value == "yes") {
			setUseLogging(true);
		} else if (value == "no") {
			setUseLogging(false);
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
                Do you need a tool for ingesting and analyzing logs?
			</h2>
            <div>
				<span style={{ color: "red" }}>{error}</span>
			</div>
			<label>
				<input type="radio" name="logging" value="yes" onChange={handleInput} />
				<div className="box">
					<span>Yes</span>
				</div>
			</label>

			<label>
				<input type="radio" name="logging" value="no" onChange={handleInput} />
				<div className="box">
					<span>No</span>
				</div>
			</label>
			{useLogging && (
				<div>
					<h2 className="section-heading">
						Do you you want a tool to visualize and explore your logs?
					</h2>
					<label>
						<input
							type="radio"
							name="logging-visualization"
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
							name="logging-visualization"
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

export default Seven;
