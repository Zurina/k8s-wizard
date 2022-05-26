import React from "react";
import { Step } from "react-albus";
import ArticleRow from "../utilities/articleRow";

const OnPremiseHosting = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div>
					<h1>How can you provision clusters?</h1>
					<p>
						These all come with different levels of automation and control
						integrated. Some include provisioning the underlying infrastructure
						while others doesn't.
					</p>
					<ArticleRow name="Kubeadm" />
					<ArticleRow name="Kops" />
					<ArticleRow name="Kubespray" />
					<ArticleRow name="Rancher" />
					<ArticleRow name="Talos" />
					<ArticleRow name="Portainer" />
					<button onClick={() => push("tool-boxes")}>Next</button>
				</div>
			)}
		/>
	);
};

export default OnPremiseHosting;
