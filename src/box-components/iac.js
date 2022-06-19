import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from './icons/iac.png';

const IAC = (props) => {
	const openModal = React.useRef(null)

    const content = {
        "title": "Infrastructure as Code",
        "description": "Is multi cloud support a factor to you? Do you need to migrate stuff often? Does the tool you are considered have the necessary coverage you need for your requirements?",
        "technologies": ["Terraform", "Cloud Development Kit", "Cloudformation", "Pulumi", "Crossplane", "Arm templates"]
    }

	return (
		<div className="super-box" onClick={() => openModal.current()}>
			<div className="container">
				<h2 className="description">Infrastructure as Code</h2>
				<span className="description">
                    Infrastructure as Code helps you omit manuel configurations and makes setup repeatable.
				</span>
				<div className="box">
					<div className="icon_bg" style={{backgroundImage: "url(" + iconBackground + ")"}}></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Infrastructure as Code</p>
			</div>
			<MyModal
				openModal={openModal}
				content={content}
				setToolState={props.setToolState}
				toolState={props.toolState[content.title]}
			/>
		</div>
	);
};

export default IAC;
