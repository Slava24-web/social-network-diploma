import {createSelector} from "reselect";

// Примитивный селектор
const getMembersPrimitive = (state) => {
    return state.membersPage.members;
}

// Селектор
// Первым параметром передаём примитивный селектор (либо массив селекторов через запятую)
// Библиотека reselect посмотрит, есть ли зависимости, есть ли что-то готовое в памяти
// и только после этого запустит логику селектора
export const getMembers = createSelector(getMembersPrimitive,
    // Логика селектора
    (members) => {
        return members.filter(member => true);
})

export const getPageSize = (state) => {
    return state.membersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.membersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.membersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.membersPage.isFetching;
}

export const getIsFollowing = (state) => {
    return state.membersPage.isFollowing;
}