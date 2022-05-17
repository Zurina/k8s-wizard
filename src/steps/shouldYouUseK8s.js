import React from "react";
import { Step } from "react-albus";

const Header = (props) => {
	const classes = styles();

	return (
		<Step
			id="introduction"
			render={({ props.push }) => (
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
						containerized, microservices k8s can provide a great base for
						building an app platform. If you have a single monolithic app, you
						will almost certainly be better served by a different approach!
					</p>
					<button onClick={() => push("self-host-k8s")}>YES</button>
					<button onClick={() => push("no-need")}>NO</button>
				</div>
			)}
		/>
	);
};

export default Header;
