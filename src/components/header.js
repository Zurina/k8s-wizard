import React from "react";
import { createUseStyles } from "react-jss";
import background from "./texture.png";

const styles = createUseStyles({
	header: {
		display: "flex",
		justifyContent: "space-between",
		paddingLeft: "100px",
		paddingRight: "100px",
		paddingTop: "20px",
		paddingBottom: "20px",
		height: "100px",
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
	}
});

const Header = (props) => {
	const classes = styles();

	return (
		<div className={classes.header}>
			<div>
				<img src={require("./logo-mathias.png")} width="250" />
			</div>
			<div>
				<a onClick={props.openModal} className={classes.navlinks}>
					Helmcharts
				</a>
				<a href="#" className={classes.navlinks}>
					Feedback
				</a>
				<a href="#" className={classes.navlinks}>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Header;
