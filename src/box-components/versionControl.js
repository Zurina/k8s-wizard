import React, { useContext } from "react";
import MyModal from "../utilities/myModal";
import iconBackground from "./icons/vcs.png";
import Context from "../context/context";

const IAC = () => {
	const openModal = React.useRef(null);
	const [toolState, setToolState] = useContext(Context);

	const content = {
		title: "Version Control",
		description:
			"Gitlab provides as lot of nice features, however, Github is the go-to choice here. Whatever you choose, you should choose the one you devide to use for CI/CD (or the other way around).",
		technologies: [
			"Github",
			"Gitlab",
			"Bitbucket",
			"Circle CI",
			"Cloud specific",
		],
	};

	return (
		<div className="super-box" onClick={openModal.current}>
			<div className="container">
				<h2 className="description">Version Control</h2>
				<span className="description">
					Which version control system should you use?
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
				<p className="title">Version Control</p>
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

export default IAC;
