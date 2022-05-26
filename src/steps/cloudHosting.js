import React from "react";
import { Step } from "react-albus";
import ClickableArticleRow from "../utilities/clickableArticleRow";

const CloudHosting = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div>
					<h1>Which managed cluster should you use?</h1>
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
						name="Google Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Elastic Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Azure Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Digital Ocean Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Linode Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Vultr Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Civo Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Oracle Kubernetes Engine"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Openshift"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="IBM Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="OVHcloud Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Alibaba Cloud Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
					<ClickableArticleRow
						name="Tencent Kubernetes"
						updateState={props.updateState}
						push={push}
					/>
				</div>
			)}
		/>
	);
};

export default CloudHosting;
