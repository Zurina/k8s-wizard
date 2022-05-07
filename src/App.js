import React from "react";
import Albus from "./albus";
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
      <Albus />
      <HelmModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
}
