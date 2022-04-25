import React from "react";
import "./styles.scss";
import Wizard from "./wizard";
import Header from "./components/header";
import HelmModal from "./components/helmModal";

export default function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

  return (
    <div>
      <Header openModal={openModal}/>
      <Wizard />
      <HelmModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
}
