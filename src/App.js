import React from "react";
import Albus from "./albus";
import Header from "./components/header";
import HelmModal from "./components/helmModal";

export default function App() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [envState, setEnvState] = React.useState({});

	function updateEnvState(key, value) {
		setEnvState((prev) => ({ ...prev, [key]: value }));
	}

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
			<Header openModal={openModal} />
			<Albus envState={envState} updateEnvState={updateEnvState} />
			<HelmModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
		</div>
	);
}
