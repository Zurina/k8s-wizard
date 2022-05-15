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
        "title": "Continuous Deployment",
        "description": "Pull based is what GitOps is about and here you avoid having cluster credentials in CI. Push based is easier to get started with.",
        "technologies": ["Pull based (Argo CD or Flux)", "Push based (From your CI pipelines)"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Continuous Deployment</h2>
				<span className="description">
                    Which Continuous Deployment tool works best for your setup and CI?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Continuous Deployment</p>
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
