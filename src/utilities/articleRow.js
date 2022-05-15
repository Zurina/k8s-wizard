import React from "react";

const ArticleRow = (props) => {
	return (
		<article class="leaderboard__profile">
			<img
				src="https://randomuser.me/api/portraits/men/36.jpg"
				alt="Mark Zuckerberg"
				class="leaderboard__picture"
			/>
			<span class="leaderboard__name">{props.name}</span>
		</article>
	);
};

export default ArticleRow;
