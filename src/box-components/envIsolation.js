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
        "title": "Environment Isolation",
        "description": "Whatever you choose here will have an effect on your automation of infrastructure as code. You might be able to use namespaces for separation, you might want to provision separate clusters, or maybe even locating those separate clusters in isolated cloud accounts!",
        "technologies": ["Namespaces", "Clusters", "Cloud accounts", "Cloud projects"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Environment Isolation</h2>
				<span className="description">
                    What level of environment isolation do you need (e.g. between teams or dev/staging/prod)? 
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Environment Isolation</p>
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
