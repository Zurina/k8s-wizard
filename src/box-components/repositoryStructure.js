import React from "react";
import MyModal from "../utilities/myModal";

const IAC = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Repository Structure",
        "description": "Mono-repo favors consistency, whereas multi-repo focuses on decoupling. While in a mono-repo, the entire team can see changes done by one person, multi-repo creates a separate repo for each team, who have access to only the required services.",
        "technologies": ["Monorepo", "Multi-repo"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Repository Structure</h2>
				<span className="description">
                    What kind of repository structure should you choose?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Repository Structure</p>
			</div>
			<MyModal
				content={content}
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default IAC;
