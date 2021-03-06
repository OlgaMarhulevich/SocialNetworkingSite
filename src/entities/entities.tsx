export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
    img: string
    messages: Array<MessageType>
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

export type AuthDataType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type ProfileStatusDataType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type FollowResponse = {
    resultCode: number
    messages: []
    data: {}
}
