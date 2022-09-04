import React from "react";

const ClickableArticleRow = (props) => {

    const clickUpdate = () => {
        props.updateEnvState('cloud-provider', props.name)
        props.push("tool-boxes")
    }

	return (
		<div onClick={clickUpdate}>
			<article className="leaderboard__profile">
				<span className="leaderboard__name">{props.name}</span>
			</article>
		</div>
	);
};

export default ClickableArticleRow;
