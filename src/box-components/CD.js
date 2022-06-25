import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/cd.png";
import Context from "../context/context";

const ContainerRegistry = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Continuous Deployment",
		description:
			"Pull based is what GitOps is about and here you avoid having cluster credentials in CI. Push based is easier to get started with.",
		technologies: [
			"Pull based (Argo CD or Flux)",
			"Push based (From your CI pipelines)",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Continuous Deployment</h2>
				<span className="description">
					Which Continuous Deployment tool works best for your setup and CI?
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
				<p className="title">Continuous Deployment</p>
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
