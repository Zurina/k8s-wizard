import React from "react";

const ArticleRow = (props) => {

    const clickUpdate = () => {
        props.updateEnvState('cloud-provider', props.name)
        props.push("tool-boxes")
    }

	return (
		<div onClick={clickUpdate}>
			<article className="leaderboard__profile">
				<img
					src="https://randomuser.me/api/portraits/men/36.jpg"
					alt="Mark Zuckerberg"
					className="leaderboard__picture"
				/>
				<span className="leaderboard__name">{props.name}</span>
			</article>
		</div>
	);
};

export default ArticleRow;
