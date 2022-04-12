import React, { useState } from "react";
import ActionButtons from "../utilities/actionButtons";

const One = (props) => {
	const [error, setError] = useState("");
	const [isCloud, setIsCloud] = useState(false);

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (value == "cloud") {
			setIsCloud(true);
		} else if (value == "on-premise") {
			setIsCloud(false);
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
					onChange={handleInput}
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
					onChange={handleInput}
				/>
				<div className="box">
					<span>Cloud</span>
				</div>
			</label>
			{isCloud && (
				<div>
					<label>
						<input
							type="radio"
							name="cloud-provider"
							value="AWS"
							onChange={handleInput}
						/>
						<div className="box">
							<span>AWS</span>
						</div>
					</label>
					<label>
						<input
							type="radio"
							name="cloud-provider"
							value="Azure"
							onChange={handleInput}
						/>
						<div className="box">
							<span>Azure</span>
						</div>
					</label>
					<label>
						<input
							type="radio"
							name="cloud-provider"
							value="GCP"
							onChange={handleInput}
						/>
						<div className="box">
							<span>GCP</span>
						</div>
					</label>
				</div>
			)}
			<ActionButtons {...props} nextStep={validate} />
		</div>
	);
};

export default One;
