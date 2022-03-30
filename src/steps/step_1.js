import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const One = (props) => {
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
				Are you deploying to on-prem or to the cloud?
			</h2>
			<p id="description">
				On-prem meaning whether you're deploying on self-hosted datacenter at
				your company or server? The cloud could be AWS, Azure, Google Cloud etc.
			</p>
			<div>
				<span style={{ color: "red" }}>{error}</span>
			</div>
			<label>
				<input
					type="radio"
					name="environment"
					value="on-premise"
					onChange={onInputChanged}
				/>
				<div className="box">
					<span>On-premise</span>
				</div>
			</label>

			<label>
				<input
					type="radio"
					name="environment"
					value="cloud"
					onChange={onInputChanged}
				/>
				<div className="box">
					<span>Cloud</span>
				</div>
			</label>
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default One;
