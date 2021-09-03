import axios from "axios"

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
    img: string
    messages: Array<MessageType>
    newMessage: string
}
export type MessageType = {
    message: string
    name: string
    img: string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type ItemsType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type AuthDataType = {
    resultCode: number
    messages: Array<any>
    data: {
        id: number
        email: string
        login: string
    }
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export const axiosInstance = axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.0', withCredentials: true})

export const statuses = {
    NOT_INITIALIZED: 'NOT-INITIALIZED',
    ERRORS: 'ERRORS',
    IN_PROGRESS: 'IN-PROGRESS',
    SUCCESS: 'SUCCESS',
}