import React from 'react';
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

// Набор тестов
// describe описывает компонент
describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        // Создание компонента
        const component = TestRenderer.create(<ProfileStatus status="Hello!"/>);
        // Создание экземпляра компонента
        const root = component.root;

        expect(root.state.status).toBe("Hello!");
    });

    test("After creation <span> with status should be display with correct status", () => {
        // Создание компонента
        const component = TestRenderer.create(<ProfileStatus status="Hello!"/>);
        // Создание экземпляра компонента
        const root = component.root;
        const span = root.findByType('span');

        expect(span).not.toBeNull();
    });

    test("After creation <span> should contains with correct status", () => {
        // Создание компонента
        const component = TestRenderer.create(<ProfileStatus status="Hello!"/>);
        // Создание экземпляра компонента
        const root = component.root;
        const span = root.findByType('span');

        expect(span.children[0]).toBe("Hello!");
    });

    test("After creation <input> shouldn't be display", () => {
        // Создание компонента
        const component = TestRenderer.create(<ProfileStatus status="Hello!"/>);
        // Создание экземпляра компонента
        const root = component.root;

        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test("Input should be display in editMode instead of span", () => {
        const component = TestRenderer.create(<ProfileStatus status="Hello!"/>);
        // Создание экземпляра
        const root = component.root;

        const span = root.findByType('span');
        span.props.onDoubleClick();

        const input = root.findByType('input');

        expect(input.props.value).toBe("Hello!");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = TestRenderer.create(<ProfileStatus status="Hello!" updateStatus={mockCallback}/>);

        const root = component.root;
        root.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    })
});