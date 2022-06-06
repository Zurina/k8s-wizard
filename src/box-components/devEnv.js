import React from "react";
import MyModal from "../utilities/myModal";

const EnvIsolation = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Development Environment",
        "description": "Giving developers a local environment where they can test everything in a representative and matching way is important for a team's performance and ability to debug. Depending on your budget, it may be local clusters or remote clusters (or namespaces in a remote cluster).",
        "technologies": ["Docker compose", "Tilt", "Skaffold", "Local cluster (kind, k3d, docker desktop, etc.)"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Development Environment</h2>
				<span className="description">
                    What is the right local developer environment? 
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Development Environment</p>
			</div>
			<MyModal
				content={content}
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				setToolState={props.setToolState}
			/>
		</div>
	);
};

export default EnvIsolation;
