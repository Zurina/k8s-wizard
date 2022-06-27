import React from "react";
import { Step } from "react-albus";
import ArticleRow from "../utilities/articleRow";

const NoNeedForK8s = (props) => {
	return (
		<Step
			id={props.id}
			render={({ push }) => (
				<div>
					<h1>Use something else!</h1>
					<ArticleRow name="PAAS" />
					<ArticleRow name="Containers as a Service" />
					<ArticleRow name="Serverless" />
					<ArticleRow name="Hashicorp Nomad" />
					<ArticleRow name="One or few VMs" />
					<button
						className="general-button"
						onClick={() => {
							push("introduction");
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Back
					</button>
				</div>
			)}
		/>
	);
};

export default NoNeedForK8s;
