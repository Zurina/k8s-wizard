import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/credentials.png";

const Credentials = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Credentials",
		description:
			"If you use K8S secrets you need to decide if you inject them as env vars or volume mounts. You still need to consider a source of truth outside of the cluster.",
		technologies: ["K8S secrets", "Vault", "Cloud provider secret stores"],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Credentials</h2>
				<span className="description">
					How do you want to handle credentials?
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
				<p className="title">Credentials</p>
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

export default Credentials;
