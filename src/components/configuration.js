import React, { useContext } from "react";
import Context from "../context/context";
import "../styles/configuration.scss";
import pdf from "./pdf";
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

	function headRows() {
		return [
			{
				concept: "concept",
				title: "title",
				description: "description",
				pros: "pros",
				cons: "cons",
			},
		];
	}

	function bodyRows(rowCount) {
		rowCount = rowCount || 10;
		var body = [];
		for (var j = 1; j <= rowCount; j++) {
			body.push({
				concept: j,
				title: "lkjadshf",
				description: "kjadsfkjh",
				pros: "alsdkjfæalkjsdæfklajsdælf",
				cons: "kajshdflkjahsdlfkjhasldjkfhanlksjdhflajksdhfkjlh",
			});
		}
		return body;
	}

	function downloadChosenToolsAsCsv() {
		const learnMoreTools = require("../content/toolsLearnMore")["default"];

		let data = [];

		for (const [concept, toolName] of Object.entries(toolState)) {
			if (toolName != undefined) {
				const tool = {...learnMoreTools[concept][toolName]};

				let prosStr = "";
				tool["pros"].forEach(pro => {
					prosStr += pro + "\n\n"
				})

				let consStr = "";
				tool["cons"].forEach(con => {
					consStr += con + "\n\n"
				})
				
				tool["concept"] = concept;
				tool["pros"] = prosStr
				tool["cons"] = consStr
				data.push(tool);
			}
		}

		let doc = new jsPDF("l");
		let head = headRows();

		doc.autoTable({
			head: head,
			body: data,
			startY: 0,
			rowPageBreak: "auto",
			bodyStyles: { valign: "top" },
		});

		doc.save("your_tools.pdf");
	}

	return (
		<div className="configuration-container">
			<h2>Environment</h2>
			<div>
				<pre>{JSON.stringify(props.envState, null, 2)}</pre>
			</div>
			<button onClick={downloadChosenToolsAsCsv}>Download</button>
			<h2>Chosen tools</h2>
			<ul>{conceptRadioButtons}</ul>
		</div>
	);
};

export default Configuration;
