import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/auth.png";

const ContainerRegistry = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Authentication",
		description:
			"Kubernetes does not provide an OpenID Connect Identity Provider. Choosing the approach to handle this comes down to whether you already have an existing identity provider and whether you want to manage it yourself.",
		technologies: [
			"Keycloak",
			"Dex",
			"Existing Public Identity Provider (Google etc.)",
			"Cloudfoundry UAA",
			"Tremolo Security's OpenUnison",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Authentication</h2>
				<span className="description">
					How do you want to handle authentication?
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
				<p className="title">Authentication</p>
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

export default ContainerRegistry;
