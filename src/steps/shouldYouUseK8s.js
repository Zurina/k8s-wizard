import React from "react";
import { Step } from "react-albus";

const ShouldYouUseK8s = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div>
					<h1>Should you even use Kubernetes?</h1>
					<h3>If you can say yes to the following, then yes:</h3>
					<ul>
						<li>Do you operate many different applications?</li>
						<li>Are they containerized or do you plan to containerize them?</li>
						<li>
							Have you ruled out the Container as a Service options (Cloud run,
							Apprunner, Fargatte and so on)?
						</li>
					</ul>
					<p>
						So in the end, it comes down to whether you are operating many,
						containerized, microservices k8s can provide a great base for <br></br>
						building an app platform. If you have a single monolithic app, you
						will almost certainly be better served by a different approach!
					</p>
					<button
						onClick={() => {
							props.updateState("use-k8s", "yes");
							push("self-host-k8s");
						}}
					>
						YES
					</button>
					<button
						onClick={() => {
							props.updateState("use-k8s", "no");
							push("no-need");
						}}
					>
						NO
					</button>
				</div>
			)}
		/>
	);
};

export default ShouldYouUseK8s;
