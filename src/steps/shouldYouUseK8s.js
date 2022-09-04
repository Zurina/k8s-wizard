import React from "react";
import { Step } from "react-albus";

const ShouldYouUseK8s = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div className="step-container">
					<h1>Should you even use Kubernetes?</h1>
					<h3>If you can say yes to the following, then yes:</h3>
					<ul>
						<li>Do you operate many different applications?</li>
						<li>Are they containerized or do you plan to containerize them?</li>
						<li>
							Have you ruled out the Container as a Service options (Cloud run,
							Apprunner, Fargate and so on)?
						</li>
					</ul>
					<p>
						So in the end, it comes down to whether you are operating many,
						containerized, microservices k8s can provide a great base for <br></br>
						building an app platform. If you have a single monolithic app, you
						will almost certainly be better served by a different approach!
					</p>
					<button
						className="general-button"
						onClick={() => {
							props.updateEnvState("use-k8s", "yes");
							push("self-host-k8s");
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
							console.log(props)
							props.updateEnvState("use-k8s", "no");
							push("no-need");
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						No
					</button>
				</div>
			)}
		/>
	);
};

export default ShouldYouUseK8s;
