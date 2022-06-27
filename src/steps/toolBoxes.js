import React from "react";
import Configuration from "../components/configuration";
import Context from "../context/context";
import concepts from "../content/concepts";
import conceptDescs from "../content/conceptDescs";
import ToolModal from "../utilities/ToolModal";

const ToolBoxes = (props) => {
	const [toolState, setToolState] = React.useState({});

	let nextModalRefs = [];
	let nextIds = []
	for (let i = 0; i < conceptDescs.length; i++) {
		nextModalRefs.push(React.useRef(null));
		nextIds.push(conceptDescs[(i + 1) % conceptDescs.length].title)
	}

	const conceptBoxes = conceptDescs.map((concept, idx) => {
		const openModal = nextModalRefs[idx]
		const nextModal = nextModalRefs[(idx + 1) % conceptDescs.length]
		return (
			<div id={"super-box" + concept.title} className="super-box" onClick={openModal.current}>
				<div className="container">
					<h2 className="description">{concept.title}</h2>
					<span className="description">{concept.shortDescription}</span>
					<div className="box">
						<div
							className="icon_bg"
							style={{ backgroundImage: "url(" + concept.iconBackground + ")" }}
						></div>
					</div>
					<div className="icon"></div>
				</div>
				<div className="text">
					<p className="title">{concept.title}</p>
				</div>
				<ToolModal
					openModal={openModal}
					content={concept}
					setToolState={setToolState}
					toolState={toolState[concept.title]}
					nextModalRef={nextModal}
					nextId={"super-box" + nextIds[idx]}
				/>
			</div>
		);
	});

	return (
		<Context.Provider value={[toolState, setToolState, concepts]}>
			<div className="toolbox-container">
				<Configuration envState={props.envState} />
				<div className="toolboxes">
					<h1>Which tools are you looking for?</h1>
					<div className="boxes-container">{conceptBoxes}</div>
				</div>
			</div>
		</Context.Provider>
	);
};

export default ToolBoxes;
