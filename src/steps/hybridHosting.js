import React from "react";
import { Step } from "react-albus";
import ClickableArticleRow from "../components/clickableArticleRow";

const HybridHosting = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div className="step-container">
					<h1>Which cloud provider will you use for your hybrid setup?</h1>
					<h3>
						There are a lot of options. It comes down to your needs and maybe
						the cloud you're already using.
					</h3>
					<p>
						In addition to the Kubernetes service you also need to consider and
						think about other services that the provider can offer and you'd
						like to use. This could be regarding storage types, DB as as
						Service, IAM an so on.
					</p>
					<span>Choose one.</span>
					<ClickableArticleRow
						name="Kubeadm"
						url="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"
						push={push}
					/>
					<ClickableArticleRow
						name="Google Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Elastic Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Azure Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Digital Ocean Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Linode Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Vultr Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Civo Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Oracle Kubernetes Engine"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Openshift"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="IBM Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="OVHcloud Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Alibaba Cloud Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
					<ClickableArticleRow
						name="Tencent Kubernetes"
						updateEnvState={props.updateEnvState}
						push={push}
					/>
				</div>
			)}
		/>
	);
};

export default HybridHosting;
