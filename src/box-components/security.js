import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/security.png";
import Context from "../context/context";

const Security = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Security",
		description:
			"Not only should you setup decent RBAC, network policies, but also add security measures like container image - and dependency scanning, and checking potential misconfigurations.",
		technologies: [
			"Falco",
			"Aqua",
			"Snyk",
			"Kubescape",
			"Various Admission Controllers",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Security</h2>
				<span className="description">
					How should you handle security in your cluster?
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
				<p className="title">Security</p>
			</div>
			<MyModal
				openModal={openModal}
				content={content}
				setToolState={setToolState}
				toolState={toolState[content.title]}
			/>
		</div>
	);
};

export default Security;
