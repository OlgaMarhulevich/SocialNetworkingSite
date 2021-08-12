import {v1} from "uuid";

export const CHANGE_FOLLOWED_STATUS = 'CHANGE-FOLLOWED-STATUS'
export const SET_USERS = 'SET-USERS'

export type initialUsersStateType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    img: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}

let initialUsersState: initialUsersStateType = {
    users: [
        {id: v1(), img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg', followed: true, fullName: 'John Snow', status: 'I am a boss', location: {country: 'Belarus', city: 'Minsk'}},
        {id: v1(), img: 'https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg', followed: false, fullName: 'Tom Smith', status: 'This is good idea', location: {country: 'Belarus', city: 'Minsk'}},
        {id: v1(), img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg', followed: true, fullName: 'Nick Fired', status: 'I like to eat', location: {country: 'Belarus', city: 'Minsk'}},
        {id: v1(), img: 'https://im0-tub-by.yandex.net/i?id=89f7bf04f56bbf8020fa9b668c941b7a&n=13', followed: false, fullName: 'Anna White', status: 'I like ice-cream', location: {country: 'Belarus', city: 'Minsk'}}
    ]
}

const usersReducer = (state = initialUsersState, action: ActionUsersReducerType): initialUsersStateType => {

    switch (action.type) {
        case CHANGE_FOLLOWED_STATUS:
            return {...state, users: state.users.map(u => action.userID === u.id ? {...u, followed: !u.followed} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

//Action creators
export type ActionUsersReducerType = ChangeFollowedStatusType | SetUsersType

type ChangeFollowedStatusType = {userID: string, type: typeof CHANGE_FOLLOWED_STATUS}
type SetUsersType = {users: UserType[], type: typeof SET_USERS}

export const changeFollowedStatusAC = (userID: string): ChangeFollowedStatusType => {
    return {userID, type: CHANGE_FOLLOWED_STATUS}
}
export const setUsersAC = (users: UserType[]): SetUsersType => ({users, type: SET_USERS})

export default usersReducer
