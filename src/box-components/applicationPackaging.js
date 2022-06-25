import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/app-packaging.png";
import Context from "../context/context";

const ContainerRegistry = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Application Packaging",
		description:
			"As you deploy to different environments you need a way to manage configurations for your applications, since configurations tend to differ in environments if you follow best practices.",
		technologies: [
			"Helm",
			"RAW Kubernetes YAML",
			"CRDs and operators",
			"Kustomize",
			"Pulumi",
			"Naml",
			"Shipa",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Application Packaging</h2>
				<span className="description">
					How should you package your applications?
				</span>
				<div className="box">
					<div
						className="icon_bg"
						style={{ backgroundImage: "url(" + iconBackground + ")" }}
					></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Application Packaging</p>
			</div>
			<MyModal
				openModal={openModal}
				content={content}
				setToolState={setToolState}
				toolState={toolState[content.title]}
			/>
		</div>
	);
};

export default ContainerRegistry;
