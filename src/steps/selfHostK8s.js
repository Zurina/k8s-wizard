import React from "react";
import { Step } from "react-albus";

const SelfHostK8s = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div className="step-container">
					<h1>Should you self-host Kubernetes?</h1>
					<h3>If you can say yes to the following, then yes:</h3>
					<ul>
						<li>Do you need new features as soon as they are released?</li>
						<li>Are you required to run on-premise for some reason?</li>
						<li>
							Are you prepared and skilled enough to deal with and debug issues
							with the control pane should they arise?
						</li>
					</ul>
					<button
						className="general-button"
						onClick={() => {
							props.updateEnvState("self-host-k8s", "yes");
							push("on-premise-hosting");
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Yes
					</button>
					<button
						className="general-button"
						onClick={() => {
							props.updateEnvState("self-host-k8s", "no");
							push("cloud-hosting");
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						No
					</button>
					<button
						className="general-button"
						onClick={() => {
							props.updateEnvState("self-host-k8s", "hybrid");
							push("hybrid-hosting");
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Hybrid
					</button>
				</div>
			)}
		/>
	);
};

export default SelfHostK8s;
