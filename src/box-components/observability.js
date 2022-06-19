import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/observability.png";

const Observability = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Observability",
		description:
			"Monitoring, logging, alerting and distributed tracing are critical components. Each tool is vital and must be considered wisely.",
		technologies: [
			"Cloud provider services",
			"Datadog",
			"Honeycomb",
			"Self-hosted ELK, Prometheus, Grafana, Kibana, Elastic search",
			"Relic",
		],
	};

	return (
		<div className="super-box" onClick={() => openModal.current()}>
			<div className="container">
				<h2 className="description">Observability</h2>
				<span className="description">
					Do you need monitoring for your applications, and if so, to what
					degree?
				</span>
				<div className="box">
					<div
						className="icon_bg"
						style={{ backgroundImage: "url(" + iconBackground + ")" }}
					></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Observability</p>
			</div>
			<MyModal
				openModal={openModal}
				content={content}
				setToolState={props.setToolState}
				toolState={props.toolState[content.title]}
			/>
		</div>
	);
};

export default Observability;
