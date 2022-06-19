import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/ci.png";

const ContainerRegistry = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Continuous Integration",
		description:
			"A lot of options. Each have a lot and different features. Look for local development/execution story, public ecosystem/shareability, integrations with your VCS.",
		technologies: [
			"Github Actions",
			"Jenkins",
			"CircleCI",
			"Gitlab CI",
			"Bitbucket",
			"Dagger",
			"Spacelift (infrastructure as code)",
		],
	};

	return (
		<div className="super-box" onClick={() => openModal.current()}>
			<div className="container">
				<h2 className="description">Continuous Integration</h2>
				<span className="description">
					CI is fundamental for developers' worflow, so which one suits you the
					most?
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
				<p className="title">Continuous Integration</p>
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
