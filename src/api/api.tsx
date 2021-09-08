import axios, {AxiosResponse} from "axios";
import {AuthDataType, FollowResponse, ItemsType, ProfileType} from "../entities/entities";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "ff96c8c6-9a67-45a6-8e7e-64655709b2bd"
    },
})

export const usersAPI = {
    getUsers: (pageSize: number, activePage: number) => {
        return axiosInstance.get(`users?count=${pageSize}&page=${activePage}`)
            .then((response: AxiosResponse<ItemsType>) => response.data)
    },
}

export const profileAPI = {
    getProfile: (userID: string) => {
        return axiosInstance.get(`profile/${userID}`)
            .then((response: AxiosResponse<ProfileType>) => response.data)
    },
}

export const authAPI = {
    getAuth: () => {
        return axiosInstance.get('auth/me')
            .then((response: AxiosResponse<AuthDataType>) => response.data)
    },
}

export const followAPI = {
    unfollow: (userId: number) => {
        return axiosInstance.delete(`follow/${userId}`)
            .then((response: AxiosResponse<FollowResponse>) => response.data)
    },
    follow: (userId: number) => {
        return axiosInstance.post(`follow/${userId}`)
            .then((response: AxiosResponse<FollowResponse>) => response.data)
    },
}


