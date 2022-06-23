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
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [superBox, setSuperBox] = React.useState(null)

	function openModal(event) {
		if (event.target.closest('.super-box') != null) {
			const box = event.target.closest('.super-box')
			setSuperBox(box)
			event.target.closest('.super-box').classList.add('hover')
		}
		setIsOpen(true);
	}

	function closeModal(event) {
		event.stopPropagation();
		if (superBox != null) {
			superBox.classList.remove('hover');
			setSuperBox(null)
		}
		setIsOpen(false);
	}

	React.useEffect(() => {
		props.openModal.current = openModal;
	}, []);

	function toolOnClick(event) {
		let id = event.currentTarget.id;
		props.setToolState((prev) => ({
			...prev,
			[props.content.title]: props.toolState != id ? id : undefined,
		}));
	}

	const technologies = props.content.technologies.map((name) => {
		if (props.toolState == name) {
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
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={modalStyle}
			>
				<h1>{props.content.title}</h1>
				<h4 style={{ fontWeight: 100 }}>{props.content.description}</h4>
				{props.content.hasOwnProperty("questions") && <ul>{questions}</ul>}
				{technologies}

				{props.toolState != undefined ? (
					<span>Chosen Tool: {props.toolState}</span>
				) : (
					""
				)}
			</Modal>
		</div>
	);
};

export default ToolModal;
