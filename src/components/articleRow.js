import React from "react";

const ArticleRow = (props) => {

	function onLearnMoreClick(event) {
		event.stopPropagation();
		console.log("name", props.name)
		if (props.url != undefined) {
			window.open(props.url, '_blank', 'noopener,noreferrer');
		} else {
			props.expandToolboxForLearnMore(props.name)
		}
	}

	return (
		<article className="leaderboard__profile">
			<span className="leaderboard__name">{props.name}</span>
			<button className="learn-more" onClick={onLearnMoreClick}>Learn more</button>
		</article>
	);
};

export default ArticleRow;
