import {v4} from "uuid";

const SEND_MESSAGE = 'messages/SEND-MESSAGE';

// Стартовый объект (по умолчанию)
let initialState = {
    dialogs: [
        {id: 1, path: "5a100d3ad2b15-bpthumb.jpg", name: "Александр Попов", time: "2 часа назад"},
        {id: 2, path: "5a0f4a768de5f-bpthumb.jpg", name: "Ирина Фёдорова", time: "онлайн"},
        {id: 3, path: "5a0f3a30b9c0c-bpthumb.jpg", name: "Игорь Николаев", time: "31 минуту назад"},
        {id: 4, path: "5a0f4a0b706f7-bpthumb.jpg", name: "Анастасия Михайлова", time: "54 минуты назад"},
        {id: 5, path: "5a0f4ca1a45d7-bpthumb.jpg", name: "Кирилл Столяров", time: "3 часа назад"},
        {id: 6, path: "5a0f495887a17-bpthumb.jpg", name: "Роберт Александров", time: "онлайн"},
        {id: 7, path: "5cbddac03094a-bpthumb.jpg", name: "Алексей Дубов", time: "онлайн"}
    ],
    messages: [
        // {
        //     id: 4,
        //     pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
        //     name: "Slava",
        //     time: "21:10",
        //     text: "I'm fine too! It's my first post!"
        // },
        // {
        //     id: 3,
        //     pathAvatar: "images/5a0f495887a17-bpthumb.jpg",
        //     name: "Robert",
        //     time: "21:07",
        //     text: "Hello, Slava! A'm fine! And You?"
        // },
        // {
        //     id: 2,
        //     pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
        //     name: "Slava",
        //     time: "21:06",
        //     text: "How are you?"
        // },
        // {id: 1, pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg", name: "Slava", time: "21:04", text: "Hello!"},
    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Отправка сообщения
        case SEND_MESSAGE: {
            let newMessage = {
                id: v4(),
                text: action.messageBody,
                pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg",
                name: "Святослав Шубин",
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (messageBody) => ({
    type: SEND_MESSAGE,
    messageBody
});

export default messagesReducer;