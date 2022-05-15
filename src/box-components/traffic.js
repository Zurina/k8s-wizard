import React from "react";
import MyModal from "../utilities/myModal";

const EnvIsolation = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Traffic",
        "description": "f your requirements are low-key, a loadbalancer from your cloud provider might be exactly what you need. However, if not, you might need to look for something with more capabilities and which is more customizable.",
        "technologies": ["Nginx", "Kong", "HAProxy", "Traefik", "Loadbalancer services from your cloud provider"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Traffic</h2>
				<span className="description">
                    How do you want to track and debug your traffic?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Traffic</p>
			</div>
			<MyModal
				content={content}
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default EnvIsolation;
