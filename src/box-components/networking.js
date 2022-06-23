import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/networking.png";

const ContainerRegistry = (props) => {
	const openModal = React.useRef(null);

	const content = {
		title: "Networking",
		description:
			"If you're using the cloud, taking advantage of the default networking is probably the easiest and best idea. Some of the more advanced options do have some interesting features though, for example using eBFF rather than regular iptabls.",
		technologies: [
			"Cloud provider implementation",
			"Calico",
			"Cilium",
			"Flannel",
			"Weave",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Networking</h2>
				<span className="description">
					How do you want to manage and deal with networking? How customized do
					you need it to be?
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
				<p className="title">Networking</p>
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

export default ContainerRegistry;
