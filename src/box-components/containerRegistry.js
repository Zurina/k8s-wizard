import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/container-registry.png";
import Context from "../context/context";

const ContainerRegistry = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Container Registry",
		description:
			"If you're using cloud, you should heavily consider using their offered registry because of the existing integration.",
		technologies: [
			"The registry offered by your cloud provider",
			"Jfrog",
			"Dockerhub",
			"Harbor",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Container Registry</h2>
				<span className="description">
					Which container registry is best suited for your situtaion?
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
				<p className="title">Container Registry</p>
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
