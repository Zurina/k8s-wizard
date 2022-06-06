import React from "react";
import MyModal from "../utilities/myModal";

const Security = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Security",
        "description": "Not only should you setup decent RBAC, network policies, but also add security measures like container image - and dependency scanning, and checking potential misconfigurations.",
        "technologies": ["Falco", "Aqua", "Snyk", "Kubescape", "Various Admission Controllers"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Security</h2>
				<span className="description">
					How should you handle security in your cluster?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Security</p>
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

export default Security;
