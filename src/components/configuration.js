import React, { useContext } from "react";
import Context from "../context/context";
import "../styles/configuration.scss";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Configuration = (props) => {
	const [toolState, setToolState, concepts] = useContext(Context);

	function onInputChange(e) {
		const eventId = e.target.id;
		if (toolState.hasOwnProperty(eventId) && toolState[eventId] != undefined) {
			setToolState((prev) => ({
				...prev,
				[eventId]: undefined,
			}));
		}
	}

	let conceptRadioButtons = concepts.map((concept) => {
		return (
			<li>
				<input
					id={concept}
					type="checkbox"
					className="switch"
					checked={
						toolState.hasOwnProperty(concept) && toolState[concept] != undefined
							? true
							: false
					}
					onChange={onInputChange}
				/>
				<label htmlFor={concept}>{concept}</label>
				<strong style={{ color: "#3371e3", lineHeight: "1.3" }}>
					{toolState.hasOwnProperty(concept) && toolState[concept] != undefined
						? " - " + toolState[concept]
						: null}
				</strong>
			</li>
		);
	});

	function downloadChosenToolsAsCsv() {
		const learnMoreTools = require("../content/toolsLearnMore")["default"];

		let data = [];

		let headers = [
			{
				name: "Concept & Tool",
				description: "Description",
				pros: "Pros",
				cons: "Cons",
			},
		];

		console.log("hello", toolState)

		for (const [concept, toolName] of Object.entries(toolState)) {
			if (toolName != undefined) {
				const tool = { ...learnMoreTools[concept][toolName] };
				console.log(tool)

				console.log(tool["pros"])

				let prosStr = "";
				tool["pros"].forEach((pro) => {
					prosStr += pro + "\n\n";
				});

				let consStr = "";
				tool["cons"].forEach((con) => {
					consStr += con + "\n\n";
				});

				tool["name"] = concept + " - " + tool["title"];
				tool["pros"] = prosStr;
				tool["cons"] = consStr;
				delete tool["title"];
				data.push(tool);
			}
		}

		let doc = new jsPDF("l");

		doc.autoTable({
			head: headers,
			body: data,
			columnStyles: { 0: { minCellWidth: 40 } },
			startY: 15,
			rowPageBreak: "auto",
			bodyStyles: { valign: "top" },
		});

		doc.save("Your_tools.pdf");
	}

	return (
		<div className="configuration-container">
			<h2>Environment</h2>
			<div>
				<pre>{JSON.stringify(props.envState, null, 2)}</pre>
			</div>
			<button className="general-button" onClick={downloadChosenToolsAsCsv}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Export your tools (pdf)
			</button>
			<h2>Chosen tools</h2>
			<ul>{conceptRadioButtons}</ul>
		</div>
	);
};

export default Configuration;
