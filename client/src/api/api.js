import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '9f865185-67f6-4d99-8a7e-98504a41c397'
    },
    // baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    baseURL: 'api/'
});

// API для работы со страницей пользователей
export const membersAPI = {
    // Получение списка пользователей и кол-во пользователей с сервера
    async getMembers(currentPage = 1, pageSize = 5) {
        return await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },

    // Отписаться от пользователя
    async unsubscribe(userId) {
        return await instance.delete(`follow/${userId}`);
    },

    // Подписаться на пользователя
    async subscribe(userId) {
        return await instance.post(`follow/${userId}`);
    }
}

export const authAPI = {
    async me() {
        // return await instance.get(`auth/me`);
        return true;
    },

    async login(email, password, rememberMe = false, captcha) {
        return await axios.post(`http://localhost:5000/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },

    async logout() {
        return await axios.delete(`http://localhost:5000/auth/login`);
    },

    async register(email, password) {
        // return await axios.post('http://localhost:5000/auth/register', {
        //     email,
        //     password,
        // });
        const response = await fetch('auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        return await response.json();
    },
}

export const profileAPI = {
    // Подгрузить информацию о пользователе
    async getProfile(id) {
        return await instance.get(`profile/${id}`);
    },

    // Подгрузить статус пользователя
    async getStatus(id) {
        return await instance.get(`profile/status/${id}`);
    },

    // Обновление статуса
    async updateStatus(status) {
        const response = await instance.put(`profile/status`, {
            status: status
        })
        return response;
    },

    // Смена аватарки
    async updateAvatar(photo) {
        let formData = new FormData();
        formData.append('image', photo);
        const response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response;
    },

    // Сохранение данных профиля
    async saveProfile(profile) {
        const response = await instance.put(`profile`, profile);
        return response;
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}