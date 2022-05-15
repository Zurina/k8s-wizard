import React from "react";
import MyModal from "../utilities/myModal";

const ContainerRegistry = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Application Packaging",
        "description": "As you deploy to different environments you need a way to manage configurations for your applications, since configurations tend to differ in environments if you follow best practices.",
        "technologies": ["Helm", "RAW Kubernetes YAML", "CRDs and operators", "Kustomize", "Pulumi", "Naml", "Shipa"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Application Packaging</h2>
				<span className="description">
                    Application Packaging is a registry to store your container images.
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Application Packaging</p>
			</div>
			<MyModal
				content={content}
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default ContainerRegistry;
