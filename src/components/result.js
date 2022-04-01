import React from "react";
import "./result.scss";

const Result = (props) => {
	return (
		<div className="App">
			{Object.keys(props.information).map((key) => {
                return (
                    <div className="container">
                        <img className="container__image" src={require("./" + key + ".png")} width='250' height='100'/>
						<div>
							<span className="container__text">{key} {props.information[key]} -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
						</div>
                    </div>
                )
			})}
		</div>
	);
};

export default Result;
