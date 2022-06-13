import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from './icons/storage.png';

const EnvIsolation = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Storage",
        "description": "For auto-provisioning block storage, your cloud-providers CSI driver will get you started. For more cutomizable storage features, Rook can help you out.",
        "technologies": ["Storage provided by cloud provider", "Rook"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Storage</h2>
				<span className="description">
                    Do you need storage for your applications?
				</span>
				<div className="box">
					<div className="icon_bg" style={{backgroundImage: "url(" + iconBackground + ")"}}></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Storage</p>
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