import membersReducer, {acceptSubscribe, acceptUnsubscribe, subscribe} from "../MembersReducer";

let state = {
    members: [
        {
            name: "Shubert",
            id: 1,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: true
        },
        {
            name: "Hacker",
            id: 2,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ]
}

test("When click 'subscribe', followed = true", () => {
    // Подготовка данных
    let action = acceptSubscribe(2);

    // Выполнение запроса
    let newState = membersReducer(state, action);

    expect(newState.members[1].followed).toBe(true);
});

test("When click 'unsubscribe', followed = false", () => {
    // Подготовка данных
    let action = acceptUnsubscribe(1);

    // Выполненеи запроса
    let newState = membersReducer(state, action);

    // Проверка
    expect(newState.members[0].followed).toBe(false);
});