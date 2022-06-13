import {membersAPI} from "../api/api";

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_MEMBERS = 'SET_MEMBERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    // Массив пользователей
    members: [],
    // Кол-во блоков на странице
    pageSize: 8,
    // Начальное общее кол-во пользователей
    totalCount: 0,
    // Номер текущей страницы
    currentPage: 1,
    // Получаем ли мы сейчас запрос
    isFetching: true,
    // follow в процессе или нет
    isFollowing: []
}

const membersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                members: state.members.map(member => {
                    if (member.id === action.memberId) {
                        return {...member, followed: true};
                    }
                    return member;
                })
            };

        case UNSUBSCRIBE:
            return {
                ...state,
                members: state.members.map(member => {
                    if (member.id === action.memberId) {
                        return {...member, followed: false};
                    }
                    return member;
                })
            };

        case SET_MEMBERS:
            return {
                ...state,
                members: [...action.members]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.memberId]
                    : state.isFollowing.filter(id => id !== action.memberId)
                // filter вернёт новый массив
            }
        }
        default:
            return state;
    }
}

// actionCreator - чистая функция, которая возвращает объект action
export const acceptSubscribe = (memberId) => ({type: SUBSCRIBE, memberId});

export const acceptUnsubscribe = (memberId) => ({type: UNSUBSCRIBE, memberId});

export const setMembers = (members) => ({type: SET_MEMBERS, members});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleIsFollowing = (isFetching, memberId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, memberId});

// thunkCreator
// Диспатчим action (вызов ActionCreator)
export const requestMembers = (page, pageSize) => {
    // Thunk
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const response = await membersAPI.getMembers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setMembers(response.data.items));
        dispatch(setTotalCount(response.data.totalCount));
    }
}

// Общая функция подписки/отписки
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, userId));

    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    // Заканчивается процесс подписки
    dispatch(toggleIsFollowing(false, userId));
}

// Subscribe
export const subscribe = (id) => async (dispatch) => {
        const apiMethod = membersAPI.subscribe.bind(membersAPI);

        await followUnfollowFlow(dispatch, id, apiMethod, acceptSubscribe);

        // dispatch(toggleIsFollowing(true, id));
        //
        // const response = await apiMethod(id);
        // if (response.resultCode === 0) {
        //     dispatch(actionCreator(id));
        // }
        // // Заканчивается процесс подписки
        // dispatch(toggleIsFollowing(false, id));
}

// Unsubscribe
export const unsubscribe = (id) => async (dispatch) => {
        const apiMethod = membersAPI.unsubscribe.bind(membersAPI);

        await followUnfollowFlow(dispatch, id, apiMethod, acceptUnsubscribe);

        // dispatch(toggleIsFollowing(true, id));
        //
        // const response = await apiMethod(id);
        // if (response.resultCode === 0) {
        //     dispatch(actionCreator(id));
        // }
        // // Заканчивается процесс отписки
        // dispatch(toggleIsFollowing(false, id));
}

export default membersReducer;