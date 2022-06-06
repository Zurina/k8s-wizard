import React from "react";
import MyModal from "../utilities/myModal";

const Credentials = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Credentials",
        "description": "If you use K8S secrets you need to decide if you inject them as env vars or volume mounts. You still need to consider a source of truth outside of the cluster.",
        "technologies": ["K8S secrets", "Vault", "Cloud provider secret stores"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Credentials</h2>
				<span className="description">
                    How do you want to handle credentials?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Credentials</p>
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

export default Credentials;
