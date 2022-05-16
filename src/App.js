import React from "react";
import Albus from "./albus";
import Header from "./components/header";
import HelmModal from "./components/helmModal";
import Configuration from "./components/configuration";

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
      <Configuration />
      <Albus />
      <HelmModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
}
