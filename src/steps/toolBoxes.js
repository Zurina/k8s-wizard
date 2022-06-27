import React from "react";
import Configuration from "../components/configuration";
import Context from "../context/context";
import concepts from "../content/concepts";
import conceptDescs from "../content/conceptDescs";
import MyModal from "../utilities/myModal";

const ToolBoxes = (props) => {
	const [toolState, setToolState] = React.useState({});

	const conceptBoxes = conceptDescs.map((concept) => {
		const openModal = React.useRef(null);
		return (
			<div className="super-box" onClick={openModal.current}>
				<div className="container">
					<h2 className="description">{concept.title}</h2>
					<span className="description">
						{concept.shortDescription}
					</span>
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
				<MyModal
					openModal={openModal}
					content={concept}
					setToolState={setToolState}
					toolState={toolState[concept.title]}
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
					<div className="boxes-container">
						{conceptBoxes}
					</div>
				</div>
			</div>
		</Context.Provider>
	);
};

export default ToolBoxes;
