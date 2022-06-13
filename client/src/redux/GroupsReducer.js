const JOIN = "JOIN";
const LEAVE = "LEAVE";
const SET_GROUPS = "SET-GROUPS";

let initialState = {
    groups: [
        {
            id: 1,
            members: 2,
            pathCover: "images/5a101e837705b-bp-cover-image.jpg",
            pathLogo: "images/5a101e7b809a3-bpthumb.jpg",
            name: "Директорат",
            time: "17 часов назад",
            text: "Обсуждение важных вопросов и публикация новостей",
            status: "Открытое",
            joined: true
        },
        {
            id: 2,
            members: 2,
            pathCover: "images/5a101e3ee513a-bp-cover-image.jpg",
            pathLogo: "images/5a101deef28bc-bpthumb.jpg",
            name: "IT-отдел",
            time: "18 часов назад",
            text: "Лучшая команда разработчиков!",
            status: "Открытое",
            joined: true
        },
        {
            id: 3,
            members: 1,
            pathCover: "images/WhiteBG.png",
            pathLogo: "images/5c86f99ad5bf0-bpfull.jpg",
            name: "Фронтенд",
            time: "3 месяца назад",
            text: "Frontend!!!",
            status: "Закрытое",
            joined: true
        },
        {
            id: 4,
            members: 1,
            pathCover: "images/5a101b23b8081-bp-cover-image.jpg",
            pathLogo: "images/5a101b3a12e97-bpfull.jpg",
            name: "Отдел бухгалтерии",
            time: "4 часа назад",
            text: "Если ты считаешь, что у тебя всё плохо - возьми калькулятор и пересчитай ещё раз!",
            status: "Закрытое",
            joined: true
        },
        {
            id: 5,
            members: 2,
            pathCover: "images/5a101ba65fd0d-bp-cover-image.jpg",
            pathLogo: "images/5a101bcb3fed9-bpfull.jpg",
            name: "Праздники",
            time: "1 день назад",
            text: "Поздравляем коллег с праздиками!",
            status: "Открытое",
            joined: true
        },
        {
            id: 6,
            members: 0,
            pathCover: "images/5a101a50d2bcb-bp-cover-image.jpg",
            pathLogo: "images/5a101a45eca46-bpfull.jpg",
            name: "Backend",
            time: "3 часа назад",
            text: "Сообщество любителей бэкэнда!",
            status: "Открытое",
            joined: false
        },
        {
            id: 7,
            members: 1,
            pathCover: "images/5a101d3b9ba1f-bp-cover-image.jpg",
            pathLogo: "images/5a101d351d90a-bpfull.jpg",
            name: "Спортивный клуб",
            time: "1 день назад",
            text: "Работа - не волк, в лес не убежит!",
            status: "Открытое",
            joined: true
        },
        {
            id: 8,
            members: 0,
            pathCover: "images/5a101e97b0432-bp-cover-image.jpg",
            pathLogo: "images/5a101eab2bc2d-bpfull.jpg",
            name: "@Дизайн",
            time: "20 часов назад",
            text: "Дизайнер понимает, что достиг совершенства не тогда, когда ему нечего добавить, а тогда, когда нечего убрать.",
            status: "Закрытое",
            joined: false
        },
    ]
}

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOIN:
            return {
                ...state,
                groups: state.groups.map(group => {
                    if (group.id === action.groupId) {
                        return {...group, joined: true};
                    }
                    return group;
                })
            };

        case LEAVE:
            return {
                ...state,
                groups: state.groups.map(group => {
                    if (group.id === action.groupId) {
                        return {...group, joined: false};
                    }
                    return group;
                })
            };

        case SET_GROUPS:
            return {
                ...state,
                groups: [...state.groups, ...action.groups]
            }
        default:
            return state;
    }
}

// actionCreator - чистая функция, которая возвращает объект action
export const join = (groupId) => ({type: JOIN, groupId});

export const leave = (groupId) => ({type: LEAVE, groupId});

export const setGroups = (groups) => ({type: SET_GROUPS, groups});

export default groupsReducer;