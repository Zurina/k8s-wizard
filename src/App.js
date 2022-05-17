import React from "react";
import Albus from "./albus";
import Header from "./components/header";
import HelmModal from "./components/helmModal";

export default function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState({});

  function updateState(key, value) {
    setState(prev => ({...prev, [key]: value}))
  }

  function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
  return (
    <div>
      {JSON.stringify(state)}
      <Header openModal={openModal}/>
      <Albus updateState={updateState}/>
      <HelmModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
}
