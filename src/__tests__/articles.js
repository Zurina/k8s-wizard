import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ArticleRow from "../components/articleRow"
import ClickableArticleRow from "../components/clickableArticleRow"

test("Article row", () => {
	render( <ArticleRow name={"Mathias"}/>);
	expect(screen.queryByText("hello")).toBeNull()
	expect(screen.queryByText("Mathias")).toBeTruthy()
});

test("ClickableArticle row", () => {
	const spy = jest.fn();
	const { container } = render( <ClickableArticleRow name={"Mathias"} updateEnvState={spy} push={spy}/>);
	expect(screen.queryByText("hello")).toBeNull()
	expect(screen.queryByText("Mathias")).toBeTruthy()

	const row = container.querySelector('div')
	fireEvent.click(row);
	expect(spy).toHaveBeenCalled();
});
