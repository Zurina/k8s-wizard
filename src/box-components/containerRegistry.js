import React from "react";
import MyModal from "../utilities/myModal";

const ContainerRegistry = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Container Registry",
        "description": "If you're using cloud, you should heavily consider using their offered registry because of the existing integration.",
        "technologies": ["The registry offered by your cloud provider", "Jfrog", "Dockerhub", "Harbor"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Container Registry</h2>
				<span className="description">
                    Which container registry is best suited for your situtaion?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Container Registry</p>
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

export default ContainerRegistry;
