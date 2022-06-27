import React from "react";

const ArticleRow = (props) => {

	function onLearnMoreClick(event) {
		event.stopPropagation();
		alert(props.name);
	}

	return (
		<article className="leaderboard__profile">
			<img
				src="https://randomuser.me/api/portraits/men/36.jpg"
				alt="Mark Zuckerberg"
				className="leaderboard__picture"
			/>
			<span className="leaderboard__name">{props.name}</span>
			<button className="learn-more" onClick={onLearnMoreClick}>Learn more</button>
		</article>
	);
};

export default ArticleRow;
