import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b67776b6-da83-418a-9f27-1b9a99d82f83"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data);
    },
    getAuth() {
        return instance.get(`auth/me`, {
            withCredentials: true
        }).then(response => response.data);
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
}