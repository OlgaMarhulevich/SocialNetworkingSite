import { UserType } from "../entities/entities";

//constants
export const CHANGE_FOLLOWED_STATUS = 'CHANGE-FOLLOWED-STATUS'
export const SET_USERS = 'SONET/USERS/SET-USERS'   // уникализируем константу, чтобы избежать совпадений
export const SET_STATUS = 'SONET/USERS/SET-STATUS'

export const statuses = {
    NOT_INITIALIZED: 'NOT-INITIALIZED',
    ERRORS: 'ERRORS',
    IN_PROGRESS: 'IN-PROGRESS',
    SUCCESS: 'SUCCESS'
}

//initial state
export type initialUsersStateType = {
    users: Array<UserType>
    status: string
}

let initialUsersState: initialUsersStateType = {
    users: [],
    status: statuses.NOT_INITIALIZED
}

//reducer
const usersReducer = (state = initialUsersState, action: ActionUsersReducerType): initialUsersStateType => {

    switch (action.type) {
        case CHANGE_FOLLOWED_STATUS:
            return {...state, users: state.users.map(u => action.userID === u.id ? {...u, followed: !u.followed} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

//action types
export type ActionUsersReducerType = ChangeFollowedStatusType | SetUsersType | SetStatusType

type ChangeFollowedStatusType = {userID: number, type: typeof CHANGE_FOLLOWED_STATUS}
type SetUsersType = {users: UserType[], type: typeof SET_USERS}
type SetStatusType = {status: string, type: typeof SET_STATUS}

//action creators
export const changeFollowedStatusAC = (userID: number): ChangeFollowedStatusType => {
    return {userID, type: CHANGE_FOLLOWED_STATUS}
}
export const setUsersAC = (users: UserType[]): SetUsersType => ({users, type: SET_USERS})
export const setStatusAC = (status: string): SetStatusType => ({status, type: SET_STATUS})

export default usersReducer
