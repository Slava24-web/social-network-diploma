import {chatApi} from "../api/chat-api";

const SET_MESSAGES = 'SET_MESSAGES';

const initialState = {
    messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        default: return state;
    }
}

// Получение сообщений
const setMessages = (messages) => {
    return {
        type: 'SET_MESSAGES',
        payload: messages
    }
}

export const startListenMessages = () => async (dispatch) => {
    chatApi.subscribe(messages => {
        dispatch(setMessages(messages));
    });
}

export const stopListenMessages = () => async (dispatch) => {
    chatApi.unsubscribe(messages => {
        dispatch(setMessages(messages));
    });
}

export default chatReducer;