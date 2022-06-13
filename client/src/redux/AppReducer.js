import {auth} from "./auth/reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

const initializedSuccess = () => ({
    type: INITIALIZE_SUCCESS
});

// getAuthUserData
export const initializeApp = () => /* thunk */ (dispatch) => {
    let promise = dispatch(auth());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;