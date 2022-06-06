import React from "react";
import MyModal from "../utilities/myModal";

const ContainerRegistry = (props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

    const content = {
        "title": "Networking",
        "description": "If you're using the cloud, taking advantage of the default networking is probably the easiest and best idea. Some of the more advanced options do have some interesting features though, for example using eBFF rather than regular iptabls.",
        "technologies": ["Cloud provider implementation", "Calico", "Cilium", "Flannel", "Weave"]
    }

	return (
		<div className="super-box" onClick={openModal}>
			<div className="container">
				<h2 className="description">Networking</h2>
				<span className="description">
                    How do you want to manage and deal with networking? How customized do you need it to be?
				</span>
				<div className="box">
					<div className="icon_bg"></div>
				</div>
				<div className="icon"></div>
			</div>
			<div className="text">
				<p className="title">Networking</p>
			</div>
			<MyModal
				content={content}
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				setToolState={props.setToolState}
			/>
		</div>
	);
};

export default ContainerRegistry;
