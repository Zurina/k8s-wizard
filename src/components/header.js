import React from "react";
import { createUseStyles } from "react-jss";
import background from "./texture.png";
import Modal from 'react-modal';

const styles = createUseStyles({
	header: {
		display: "flex",
		justifyContent: "space-between",
		paddingLeft: "100px",
		paddingRight: "100px",
		paddingTop: "20px",
		paddingBottom: "20px",
		height: "200px",
		backgroundImage: `url(${background})`,
		backgroundColor: "#303030",
		color: "white",
	},
	navlinks: {
		padding: "20px",
		margin: "20px",
		cursor: "pointer",
		color: "white",
		textDecoration: "none",
	},
	content: {
		zIndex: "1",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
});

const Header = () => {
	const classes = styles();

	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className={classes.header}>
			<div>
				<img src={require("./logo-mathias.png")} width="250" />
			</div>
			<div>
				<a onClick={openModal} className={classes.navlinks}>
					Helmcharts
				</a>
				<a href="#" className={classes.navlinks}>
					Feedback
				</a>
				<a href="#" className={classes.navlinks}>
					Contact
				</a>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				styles={classes.content}
				contentLabel="Example Modal"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	);
};

export default Header;
