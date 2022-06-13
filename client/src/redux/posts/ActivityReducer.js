import {v4} from "uuid";
import {
    ADD_POST,
    CLEAR_POSTS,
    DELETE_POST,
    GET_POST,
    GET_POSTS,
    POST_LOADING,
    UPDATE_POST,
    UPDATE_POSTS
} from "./types";

// Стартовый объект (по умолчанию)
let initialState = {
    twits: [
        // {
        //     id: v4(),
        //     name: "Святослав Шубин",
        //     title: "Новая запись",
        //     time: "7 июля",
        //     text: "Всем привет!"
        // },
        // {
        //     id: v4(),
        //     name: "Святослав Шубин",
        //     title: "Новая запись",
        //     time: "5 июля",
        //     text: "Занимаюсь вебом"
        // },
        // {
        //     id: v4(),
        //     name: "Святослав Шубин",
        //     title: "Новая запись",
        //     time: "3 июля",
        //     text: "Крутая социальная сеть!"
        // },
        // {
        //     id: v4(),
        //     name: "Святослав Шубин",
        //     title: "Новая запись",
        //     time: "30 июня",
        //     text: "Мой первый пост"
        // },
    ],
    totalCount: 0,
    twit: null,
    isLoading: false
}

const activityReducer = (state = initialState, action) => {
    // Добавление поста
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                twits: [action.payload, ...state.twits]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                twits: state.twits.filter(twit => twit._id !== action.payload)
            }
        }
        case POST_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case CLEAR_POSTS:
            return {
                ...state,
                twits: [],
                totalCount: 0
            }
        case GET_POSTS:
            return {
                ...state,
                twits: action.payload.posts,
                totalCount: action.payload.totalCount,
                isLoading: false
            }
        case GET_POST:
            return {
                ...state,
                twit: action.payload,
                isLoading: false
            }

        case UPDATE_POSTS:
            return {
                ...state,
                twits: state.twits.map((twit) => twit._id === action.payload._id ? action.payload : twit)
            }
        case UPDATE_POST:
            return {
                ...state,
                twit: action.payload
            }

        default:
            return state;
    }
}

export const addPost = (twitBody) => ({type: ADD_POST, twitBody});
export const deletePost = (twitId) => ({type: DELETE_POST, twitId});
export const clearPosts = () => ({type: CLEAR_POSTS});
export const setPostLoading = (isLoading) => ({type: POST_LOADING, payload: isLoading});

// const setProfile = (profile) => ({type: SET_PROFILE, profile});

// // thunk-creator
// export const getUserProfile = (userId) => async (dispatch) => {
//     const response = await profileAPI.getProfile(userId);
//     dispatch(setProfile(response.data));
// }

export default activityReducer;