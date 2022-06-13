let initialState = {
    users: [
        {id: 1, pathAvatar: "images/5a100d3ad2b15-bpthumb.jpg", name: "Александр Попов", friends: 26},
        {id: 2, pathAvatar: "images/5a0f4a768de5f-bpthumb.jpg", name: "Ирина Фёдорова", friends: 25},
        {id: 3, pathAvatar: "images/5a0f3a30b9c0c-bpthumb.jpg", name: "Игорь Николаев", friends: 25},
        {id: 4, pathAvatar: "images/5a0f4ccfc8d10-bpthumb.jpg", name: "Анастасия Михайлова", friends: 23},
        {id: 5, pathAvatar: "images/5a0f4ca1a45d7-bpthumb.jpg", name: "Кирилл Столяров", friends: 22},
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
        email: "network@gmail.com",
        phone: "+7 (900) 888 77 11"
    }
}

const menuReducer = (state = initialState, action) => {
    return state;
}

export default menuReducer;