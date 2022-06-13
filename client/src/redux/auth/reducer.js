import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {GET_CAPTCHA_URL_SUCCESS, SET_CURRENT_USER, SET_USER_DATA} from "./types";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,

    /** New */
    user: {},
    isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        /** New */
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload,
            }
        default:
            return state;
    }
};

/** New */
export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
})

/** End */

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

// thunk-creator getAuthUserData
// TODO: Auth
export const auth = () => /* thunk */ async (dispatch) => {
    const response = await authAPI.me();

    // if (response.data.resultCode === 0) {
    //     let {id, email, login} = response.data.data;
    //     dispatch(setAuthUserData(id, email, login, true));
    // }
    dispatch(setAuthUserData(null, null, null, true));
}

// thunk-creator
export const login = (email, password, rememberMe, captcha) => /* thunk */ async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(auth());
    } else {
        // if (response.data.resultCode === 10) {
        //     dispatch(getCaptchaUrl());
        // }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        // _error - общие ошибки
        dispatch(stopSubmit('login', {_error: messages}));
    }
}

export const register = (email, password) => async (dispatch) => {
    console.log(email, password)
    const response = await authAPI.register(email, password);
    if (response.ok) {
        dispatch(auth());
    } else {
        // if (response.data.resultCode === 10) {
        //     dispatch(getCaptchaUrl());
        // }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        // _error - общие ошибки
        dispatch(stopSubmit('login', {_error: messages}));
    }
}

// thunk-creator
export const logout = () => /* thunk */ async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

// thunk-creator
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;