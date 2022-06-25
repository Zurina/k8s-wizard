import React, { useContext } from "react";
import Context from '../context/context'
import "../styles/configuration.scss";

const Configuration = (props) => {

	const [toolState, setToolState, concepts] = useContext(Context);


	function onInputChange(e) {
		const eventId = e.target.id;
		if (
			toolState.hasOwnProperty(eventId) &&
			toolState[eventId] != undefined
		) {
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
						toolState.hasOwnProperty(concept) &&
						toolState[concept] != undefined
							? true
							: false
					}
					onChange={onInputChange}
				/>
				<label htmlFor={concept}>{concept}</label>
				<strong style={{color: "#3371e3", lineHeight: "1.3"}}>{toolState.hasOwnProperty(concept) && toolState[concept] != undefined ? " - " + toolState[concept] : null}</strong>
			</li>
		);
	});

	return (
		<div className="configuration-container">
			<h2>Environment</h2>
			<div>
				<pre>{JSON.stringify(props.envState, null, 2)}</pre>
			</div>
			<h2>Chosen tools</h2>
			<ul>
				{conceptRadioButtons}
			</ul>
		</div>
	);
};

export default Configuration;
