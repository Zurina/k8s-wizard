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
					<ArticleRow
						name="Kubeadm"
						url="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"
					/>
					<ArticleRow name="Kops" url="https://kops.sigs.k8s.io/" />
					<ArticleRow
						name="Kubespray"
						url="https://kubernetes.io/docs/setup/production-environment/tools/kubespray/"
					/>
					<ArticleRow
						name="Rancher"
						url="https://kubernetes.io/docs/setup/production-environment/tools/kubespray/"
					/>
					<ArticleRow name="Talos" url="https://www.talos.dev/" />
					<ArticleRow name="Portainer" url="https://www.portainer.io/" />
					<button className="general-button" onClick={() => push("tool-boxes")}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Next
					</button>
				</div>
			)}
		/>
	);
};

export default OnPremiseHosting;
