import activityReducer from "./posts/ActivityReducer";
import messagesReducer from "./MessagesReducer";
import menuReducer from "./MenuReducer";

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, path: "5a100d3ad2b15-bpthumb.jpg", name: "billyhoward", time: "2 hours ago"},
                {id: 2, path: "5a0f4a768de5f-bpthumb.jpg", name: "Rebeca Carter", time: "online"},
                {id: 3, path: "5a0f3a30b9c0c-bpthumb.jpg", name: "Albert Moreno", time: "31 minutes ago"},
                {id: 4, path: "5a0f4a0b706f7-bpthumb.jpg", name: "terripeters", time: "54 minutes ago"},
                {id: 5, path: "5a0f4ca1a45d7-bpthumb.jpg", name: "Jeffery Ward", time: "31 minutes ago"},
                {id: 6, path: "5a0f495887a17-bpthumb.jpg", name: "Robert Nelson", time: "online"},
                {id: 7, path: "5cbddac03094a-bpthumb.jpg", name: "Meu Ovo", time: "online"},
                {id: 8, path: "5a0f497a00fb5-bpthumb.jpg", name: "wpengine", time: "3 hours ago"},
                {id: 9, path: "29dfc19f0f889f9a43e44e733fcfda08.png", name: "Wynonna Judd", time: "7 hours ago"},
                {id: 10, path: "5a10090f0a236-bpthumb.jpg", name: "Judith Holmes", time: "1 hours ago"},
                {id: 11, path: "5a0f4ae20a6bd-bpthumb.jpg", name: "Kathryn Wallace", time: "online"},
                {id: 12, path: "5a0f4ccfc8d10-bpthumb.jpg", name: "Frank Robertson", time: "online"},
                {id: 13, path: "5a1007cd676c0-bpthumb.jpg", name: "Denis Bishop", time: "online"},
                {id: 14, path: "5a100a06af155-bpthumb.jpg", name: "Dale Sims", time: "5 hours ago"},
            ],
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
                {id: 1, pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg", name: "Slava", time: "21:04", text: "Hello!"},
            ],
            // Значение по умолчанию в строке ввода
            newMessageText: ''
        },
        activityPage: {
            twitts: [
                {
                    id: 1,
                    name: "Slava Shubin",
                    title: "posted an update",
                    time: "7 july",
                    text: "Hello, World!",
                    comments: 0
                },
                {
                    id: 2,
                    name: "Slava Shubin",
                    title: "posted an update in the group Jazz",
                    time: "6 july",
                    text: "Всем привет!",
                    comments: 1
                },
                {
                    id: 3,
                    name: "Slava Shubin",
                    title: "posted an update",
                    time: "5 july",
                    text: "Занимаюсь вебом",
                    comments: 0
                },
                {
                    id: 4,
                    name: "Slava Shubin",
                    title: "replied to the topic deneme in the forum Forum 1",
                    time: "3 july",
                    text: "Крутая социальная сеть!",
                    comments: 2
                },
                {
                    id: 5,
                    name: "Slava Shubin",
                    title: "posted an update",
                    time: "30 june",
                    text: "Мой первый пост",
                    comments: 0
                },
            ],
            newPostText: ''
        },
        eventsPage: {
            eventsData: {text: "You are currently viewing your public page, this is what other users will see."}
        },
        groupsPage: {
            groups: [
                {
                    id: 1,
                    members: 24,
                    pathCover: "images/5a101e837705b-bp-cover-image.jpg",
                    pathLogo: "images/5a101e7b809a3-bpthumb.jpg",
                    name: "Drawing Lovers",
                    time: "17 hours ago",
                    text: "Competently formulate enterprise-wide synergy before 24/7 quality vectors. Holisticly implement enterprise intellectual capital through enabled expertise. Enthusiastically exploit.",
                    status: "Public"
                },
                {
                    id: 2,
                    members: 12,
                    pathCover: "images/5a101e3ee513a-bp-cover-image.jpg",
                    pathLogo: "images/5a101deef28bc-bpthumb.jpg",
                    name: "Jazz",
                    time: "18 hours ago",
                    text: "Dynamically repurpose B2B platforms after leading-edge infrastructures. Globally extend principle-centered internal or ”organic” sources for long-term high-impact value. Conveniently strategize real-time schemas through.",
                    status: "Public"
                },
                {
                    id: 3,
                    members: 21,
                    pathCover: "images/WhiteBG.png",
                    pathLogo: "images/5c86f99ad5bf0-bpfull.jpg",
                    name: "Huckers",
                    time: "3 month ago",
                    text: "Huckers",
                    status: "Private"
                },
                {
                    id: 4,
                    members: 51,
                    pathCover: "images/5a101b23b8081-bp-cover-image.jpg",
                    pathLogo: "images/5a101b3a12e97-bpfull.jpg",
                    name: "Drawing Association",
                    time: "4 hours ago",
                    text: "Enthusiastically re-engineer B2C human capital after transparent paradigms.",
                    status: "Public"
                },
                {
                    id: 5,
                    members: 38,
                    pathCover: "images/5a101ba65fd0d-bp-cover-image.jpg",
                    pathLogo: "images/5a101bcb3fed9-bpfull.jpg",
                    name: "Food Gang",
                    time: "1 day ago",
                    text: "Conveniently harness team driven customer service for cost effective core.",
                    status: "Public"
                },
                {
                    id: 6,
                    members: 11,
                    pathCover: "images/5a101a50d2bcb-bp-cover-image.jpg",
                    pathLogo: "images/5a101a45eca46-bpfull.jpg",
                    name: "Cricket Professionals",
                    time: "3 hours ago",
                    text: "Globally incubate worldwide infrastructures before real-time metrics. Objectively integrate top-line deliverables.",
                    status: "Public"
                },
                {
                    id: 7,
                    members: 8,
                    pathCover: "images/5a101d3b9ba1f-bp-cover-image.jpg",
                    pathLogo: "images/5a101d351d90a-bpfull.jpg",
                    name: "Sport Group",
                    time: "3 hours ago",
                    text: "Dramatically enhance wireless leadership rather than turnkey systems. Appropriately seize one-to-one web services through.",
                    status: "Public"
                },
                {
                    id: 8,
                    members: 70,
                    pathCover: "images/5a101e97b0432-bp-cover-image.jpg",
                    pathLogo: "images/5a101eab2bc2d-bpfull.jpg",
                    name: "Calligraphy",
                    time: "20 hours ago",
                    text: "Energistically procrastinate stand-alone value via front-end initiatives. Dramatically engage high standards in value before plug-and-play methodologies. Progressively utilize.",
                    status: "Public"
                },
            ]
        },
        dataContainerMenu: {id: 1, notif: "0", messages: 4, friends: 0, groups: 26, media: 51},
        menu: {
            users: [
                {id: 1, pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg", name: "billyhoward", friends: 26},
                {id: 2, pathAvatar: "images/5a0f4a768de5f-bpthumb.jpg", name: "Rebeca Carter", friends: 25},
                {id: 3, pathAvatar: "images/5a0f3a30b9c0c-bpthumb.jpg", name: "albertmoreno", friends: 25},
                {id: 4, pathAvatar: "images/5a0f4ccfc8d10-bpthumb.jpg", name: "terripeters", friends: 23},
                {id: 5, pathAvatar: "images/5a0f4ca1a45d7-bpthumb.jpg", name: "Jerry Ward", friends: 22},
            ],
            activeUsers: [
                {id: 1, pathAvatar: "images/5cbddac03094a-bpthumb.jpg"},
                {id: 2, pathAvatar: "images/5a0f495887a17-bpthumb.jpg"},
                {id: 3, pathAvatar: "images/5a0f497a00fb5-bpthumb.jpg"},
                {id: 4, pathAvatar: "images/29dfc19f0f889f9a43e44e733fcfda08.png"},
                {id: 5, pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg"},
                {id: 6, pathAvatar: "images/5a100a662624c-bpthumb.jpg"},
                {id: 7, pathAvatar: "images/5a100a06af155-bpthumb.jpg"},
                {id: 8, pathAvatar: "images/5a10090f0a236-bpthumb.jpg"},
                {id: 9, pathAvatar: "images/5a1007cd676c0-bpthumb.jpg"},
                {id: 10, pathAvatar: "images/5a0f44dec5f8e-bpthumb.jpg"},
                {id: 11, pathAvatar: "images/5a0f4ccfc8d10-bpthumb.jpg"},
                {id: 12, pathAvatar: "images/5a0f4ae20a6bd-bpthumb.jpg"},
                {id: 13, pathAvatar: "images/5a0f4ce0d07ff-bpthumb.jpg"},
                {id: 14, pathAvatar: "images/5a0f4a7689f78-bpfull.jpg"},
            ],
            info: {
                aboutText: "Professionally empower client-based convergence through enterprise sources.",
                email: "shubinshoter24@gmail.com",
                phone: "+7 (900) 888 77 11"
            }
        },
        user: {name: "Slava", nickName: "@Slava.Shubin", time: "15 minutes ago", status: "Great!"}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was change')
    },

    // Наблюдатель
    // addEventListener
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // action - объект
    // (type: 'ADD-POST')
    dispatch(action) {
        this._state.activityPage = activityReducer(this._state.activityPage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.menu = menuReducer(this._state.menu, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
// store - ООП