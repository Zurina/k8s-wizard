import React from "react";
import Modal from "react-modal";
import ArticleRow from "./articleRow";

const modalStyle = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		backgroundColor: "rgba(0, 0, 0, 0)",
		zIndex: "2"
	},
	content: {
		position: "absolute",
		top: "10%",
		left: "65%",
		right: "3%",
		bottom: "5%",
		backgroundColor: "#3371e3",
		borderRadius: "1rem",
		padding: "1.5rem",
        color: "white"
	},
};

Modal.setAppElement("#root");

const InfoModal = (props) => {
    
    const technologies = props.content.technologies.map((name) => <ArticleRow name={name}/>);
	
	let questions = null;
	if (props.content.hasOwnProperty("questions")) {
		questions = JSON.parse(JSON.stringify(props.content.questions));
		questions = questions.map((question) => <li>{question}</li>);
	}

	return (
		<div className="App">
			<Modal
				isOpen={props.modalIsOpen}
				onRequestClose={props.closeModal}
				style={modalStyle}
			>
                <h1>{props.content.title}</h1>
                <h4>{props.content.description}</h4>
				{props.content.hasOwnProperty("questions") &&
					<ul>
						{questions}
					</ul>
				}
                {technologies}
			</Modal>
		</div>
	);
};

export default InfoModal;
