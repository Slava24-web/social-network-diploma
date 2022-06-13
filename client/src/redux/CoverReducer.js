import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS';

let initialState = {
    profile: null,
    status: '',
    time: "15 минут назад"
};

const coverReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        case SAVE_AVATAR_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        default: return state;
    }
}

const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const saveAvatarSuccess = (photos) => ({type: SAVE_AVATAR_SUCCESS, photos});

// thunk-creator
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
}

// thunk-creator
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

// thunk-creator
export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
    catch (e) {
        alert('Ошибка обновления статуса!');
    }
}

//thunk-creator
export const saveAvatar = (file) => async (dispatch) => {
    const response = await profileAPI.updateAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(saveAvatarSuccess(response.data.data.photos));
    }
}

// thunk-creator
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit('editInfo', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

// В рамках одного редьюсера не запрещено обращатья к другим редьюсерам

export default coverReducer;