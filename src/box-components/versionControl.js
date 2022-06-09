import React from "react";
import MyModal from "../utilities/myModal";
import iconBackground from './icons/vcs.png';

const IAC = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Version Control",
        "description": "Gitlab provides as lot of nice features, however, Github is the go-to choice here. Whatever you choose, you should choose the one you devide to use for CI/CD (or the other way around).",
        "technologies": ["Github", "Gitlab", "Bitbucket", "Circle CI", "Cloud specific"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Version Control</h2>
				<span className="description">
                    Which version control system should you use?
				</span>
				<div className="box">
					<div className="icon_bg" style={{backgroundImage: "url(" + iconBackground + ")"}}></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Version Control</p>
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

export default IAC;
