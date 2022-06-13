import React from "react";
import Paginator from "./Paginator";
import TestRenderer from "react-test-renderer";

describe("Paginator component", () => {
    test("Pages count is 11 but should be showed only 10", () => {
        const component = TestRenderer.create(<Paginator totalCount={11} pageSize={1} portionSize={10}/>);

        const root = component.root;
        let spans = root.findAllByType('span');

        expect(spans.length).toBe(10);
    })

    test("If page is more then 10 button 'next' should be display", () => {
        const component = TestRenderer.create(<Paginator totalCount={11} pageSize={1} portionSize={10}/>);

        const root = component.root;
        let button = root.findAllByType('button');

        expect(button.length).toBe(1);
    });
});