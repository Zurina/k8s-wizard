import React from "react";
import { Step } from 'react-albus';

const KubernetesOrNot = (props) => {
    console.log("HHEEHEHE", props.text)
	return (
		<Step
			id="introduction"
			render={({ push }) => (
				<div>
					<h1>Should you even use Kubernetes?</h1>
					<h3>If you can say yes to the following, then yes:</h3>
					<li>Do you operate many different applications?</li>
					<li>Are they containerized or do you plan to containerize them?</li>
					<li>
						Have you ruled out the Container as a Service options (Cloud run,
						Apprunner, Fargate and so on)?
					</li>
					<button onClick={() => push("self-host-k8s")}>YES</button>
					<button onClick={() => push("no-need")}>NO</button>
				</div>
				//   <article class="leaderboard__profile">
				//   <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg" class="leaderboard__picture"/>
				//   <span class="leaderboard__name">Mark Zuckerberg</span>
				//   <span class="leaderboard__value">35.7<span></span></span>
				// </article>
			)}
		/>
	);
};

export default KubernetesOrNot;
