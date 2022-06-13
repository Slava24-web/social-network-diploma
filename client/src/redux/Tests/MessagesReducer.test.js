import messagesReducer, {sendMessage} from "../MessagesReducer";

let state = {
    messages: [
        {
            id: 4,
            pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
            name: "Slava",
            time: "21:10",
            text: "I'm fine too! It's my first post!"
        },
        {
            id: 3,
            pathAvatar: "images/5a0f495887a17-bpthumb.jpg",
            name: "Robert",
            time: "21:07",
            text: "Hello, Slava! A'm fine! And You?"
        },
        {
            id: 2,
            pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
            name: "Slava",
            time: "21:06",
            text: "How are you?"
        },
        {
            id: 1,
            pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
            name: "Slava",
            time: "21:04",
            text: "Hello!"},
    ]
}

test("Length of messages should be increment", () => {
    // Подготовка данных
    let action = sendMessage('Slava frontend');

    // Выполнение запроса
    let newState = messagesReducer(state, action);

    // Проверка
    expect(newState.messages.length).toBe(5);
});

test("Text of message should be correct", () => {
    // Подготовка данных
    let action = sendMessage('Slava frontend');

    // Выполнение запроса
    let newState = messagesReducer(state, action);

    // Проверка
    expect(newState.messages[4].text).toBe('Slava frontend');
});