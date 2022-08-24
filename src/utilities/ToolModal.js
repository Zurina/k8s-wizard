import React from "react";
import Modal from "react-modal";
import ArticleRow from "./articleRow";
import tips from "./tipsBasedOnEnv";

Modal.setAppElement("#root");

const ToolModal = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [superBox, setSuperBox] = React.useState(null);
	const [leftWidth, setleftWidth] = React.useState("65%");
	const [learnMoreTool, setlearnMoreTool] = React.useState(null);

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
			left: leftWidth,
			right: "3%",
			bottom: "5%",
			backgroundColor: "#3371e3",
			borderRadius: "1rem",
			padding: "1.5rem",
			color: "white",
		},
	};

	function openModal(event) {
		if (typeof event === "string") {
			const box = document.getElementById(event);
			setSuperBox(box);
			box.classList.add("hover");
		} else if (event.target.closest(".super-box") != null) {
			const box = event.target.closest(".super-box");
			setSuperBox(box);
			box.classList.add("hover");
		} else {
			// TODO FIX BUG
			if (superBox != null) {
				superBox.classList.remove("hover");
				setSuperBox(null);
			}
			setIsOpen(false);
		}
		setIsOpen(true);
	}

	function closeModal(event) {
		event.stopPropagation();
		if (superBox != null) {
			superBox.classList.remove("hover");
			setSuperBox(null);
		}
		setIsOpen(false);
		setleftWidth("65%");
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

	function nextConcept(event) {
		closeModal(event);
		props.nextModalRef.current(props.nextId);
	}

	function expandToolboxForLearnMore(name) {
		setleftWidth("22%");
		let learnMoreTools = require("../content/toolsLearnMore")["default"];
		setlearnMoreTool(learnMoreTools[props.content.title][name]);
	}

	const technologies = props.content.technologies.map((name) => {
		if (props.toolState == name) {
			return (
				<div className="active" id={name} onClick={toolOnClick}>
					<ArticleRow
						name={name}
						expandToolboxForLearnMore={expandToolboxForLearnMore}
					/>
				</div>
			);
		} else {
			return (
				<div id={name} onClick={toolOnClick}>
					<ArticleRow
						name={name}
						expandToolboxForLearnMore={expandToolboxForLearnMore}
					/>
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
				{leftWidth != "65%" && (
					<div className="learnMoreInfo">
						<h1>{learnMoreTool["title"]}</h1>
						<p>{learnMoreTool["description"]}</p>
						<h3>Pros</h3>
						<ul>
							{learnMoreTool["pros"].map((p, i) => (
								<li>{p}</li>
							))}
						</ul>
						<h3>Cons</h3>
						<ul>
							{learnMoreTool["cons"].map((c, i) => (
								<li>{c}</li>
							))}
						</ul>
					</div>
				)}
				<div className={`${leftWidth != "65%" ? "learnMore" : ""}`}>
					<h1 className="tool-modal-title">
						{props.content.title}
						<div class="arrow" onClick={nextConcept}></div>
					</h1>
					<h4 className="tool-modal-description">
						{props.content.description}
					</h4>
					<span className="tool-modal-tips">
						**{tips(props.envState, props.content.title)}**
					</span>
					{props.content.hasOwnProperty("questions") && <ul>{questions}</ul>}
					{technologies}

					{props.toolState != undefined ? (
						<span>Chosen Tool: {props.toolState}</span>
					) : (
						""
					)}
				</div>
			</Modal>
		</div>
	);
};

export default ToolModal;
