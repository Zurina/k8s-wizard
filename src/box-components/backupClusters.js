import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/backup.png";

const EnvIsolation = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Backup Clusters",
		description:
			"Should a disaster occur, you need the ability to restore your cluster. Velero is a great and free option, but if you are using GitOps, redeploying that and pointing it at your configuration repo(s) may be sufficient.",
		technologies: ["Velero", "Kasten", "Gitops Redeploy"],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Backup Clusters</h2>
				<span className="description">How should you backup clusters?</span>
				<div className="box">
					<div
						className="icon_bg"
						style={{ backgroundImage: "url(" + iconBackground + ")" }}
					></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Backup Clusters</p>
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

export default EnvIsolation;
