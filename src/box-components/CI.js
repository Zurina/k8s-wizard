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
        "title": "Continuous Integration",
        "description": "A lot of options. Each have a lot and different features. Look for local development/execution story, public ecosystem/shareability, integrations with your VCS.",
        "technologies": ["Github Actions", "Jenkins", "CircleCI", "Gitlab CI", "Bitbucket", "Dagger", "Spacelift (infrastructure as code)"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Continuous Integration</h2>
				<span className="description">
                    CI is fundamental for developers' worflow, so which one suits you the most?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Continuous Integration</p>
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
