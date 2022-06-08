import React from "react";
import Modal from "react-modal";
import ArticleRow from "./articleRow";

const modalStyle = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		backgroundColor: "rgba(0, 0, 0, 0)",
		zIndex: "2",
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
		color: "white",
	},
};

Modal.setAppElement("#root");

const ToolModal = (props) => {
	const [activeTool, setActiveTool] = React.useState("");

	function toolOnClick(event) {
		setActiveTool(
			activeTool != event.currentTarget.id ? event.currentTarget.id : ""
		);
		props.setToolState((prev) => ({
			...prev,
			[props.content.title]: undefined,
		}));
	}

	function addToolToState() {
		props.setToolState((prev) => ({
			...prev,
			[props.content.title]: activeTool,
		}));
	}

	const technologies = props.content.technologies.map((name) => {
		if (activeTool == name) {
			return (
				<div className="active" id={name} onClick={toolOnClick}>
					<ArticleRow name={name} />
				</div>
			);
		} else {
			return (
				<div id={name} onClick={toolOnClick}>
					<ArticleRow name={name} />
				</div>
			);
		}
	});

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
				<h4 style={{ fontWeight: 100 }}>{props.content.description}</h4>
				{props.content.hasOwnProperty("questions") && <ul>{questions}</ul>}
				{technologies}

				{activeTool !== "" ? (
					<button className="general-button" onClick={addToolToState}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Add tool
					</button>
				) : (
					<button className="disabled-button" disabled>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Add tool
					</button>
				)}
			</Modal>
		</div>
	);
};

export default ToolModal;
