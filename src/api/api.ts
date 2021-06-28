import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e9d3b557-d41b-4f69-b963-8960fe04958c"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
}