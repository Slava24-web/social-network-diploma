import activityReducer, {addPost, deletePost} from "../posts/ActivityReducer";

// Тестовые данные
let state = {
    twits: [
        {
            id: 1,
            name: "Slava Shubin",
            title: "posted an update",
            time: "7 july",
            text: "Hello, World!",
            comments: 0
        },
        {
            id: 2,
            name: "Slava Shubin",
            title: "posted an update in the group Jazz",
            time: "6 july",
            text: "Всем привет!",
            comments: 1
        },
        {
            id: 3,
            name: "Slava Shubin",
            title: "posted an update",
            time: "5 july",
            text: "Занимаюсь вебом",
            comments: 0
        },
        {
            id: 4,
            name: "Slava Shubin",
            title: "replied to the topic deneme in the forum Forum 1",
            time: "3 july",
            text: "Крутая социальная сеть!",
            comments: 2
        },
        {
            id: 5,
            name: "Slava Shubin",
            title: "posted an update",
            time: "30 june",
            text: "Мой первый пост",
            comments: 0
        },
    ]
};

// Проверка добавления элемента
test('Length of twits should be incremented', () => {
    // Подготовка тестовых данных
    let action = addPost("Slava frontend");

    // action
    let newState = activityReducer(state, action);

    // Ожидание
    expect(newState.twits.length).toBe(6);
});

// Проверка правильности текста поста
test('Message of new twit should be correct', () => {
    // Подготовка тестовых данных
    let action = addPost("Slava frontend");

    // Выполнение запроса
    let newState = activityReducer(state, action);

    // Ожидание
    expect(newState.twits[5].text).toBe("Slava frontend");
});

// TDD - писать тесты на то, чего ещё нет

// Проверка удаления
test('Afted deleting twit length of messages should be decrement', () => {
    // Подготовка тестовых данных
    let action = deletePost(1);

    // Выполнение запроса
    let newState = activityReducer(state, action);

    // Ожидание
    expect(newState.twits.length).toBe(4);
});

// Проверка удаления при некоректном id
test("Afted deleting twit length of messages shouldn't be decrement if id is incorrect", () => {
    // Подготовка тестовых данных
    let action = deletePost(100);

    // Выполнение запроса
    let newState = activityReducer(state, action);

    // Ожидание
    expect(newState.twits.length).toBe(5);
});