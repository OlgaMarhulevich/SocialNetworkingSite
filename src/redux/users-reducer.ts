import {UserType} from "../entities/entities";

//constants
export enum ACTIONS_USER_REDUCER {
    CHANGE_FOLLOWED_STATUS = 'CHANGE-FOLLOWED-STATUS',
    SET_USERS = 'SONET/USERS/SET-USERS',  // уникализируем константу, чтобы избежать совпадений
    SET_STATUS = 'SONET/USERS/SET-STATUS',
    CHANGE_PAGE = 'SONET/USERS/CHANGE-PAGE',
    SET_USERS_COUNT = 'SONET/USERS/SET-USERS-COUNT',
    FETCHING = 'SONET/USERS/FETCHING',
}

export const statuses = {
    NOT_INITIALIZED: 'NOT-INITIALIZED',
    ERRORS: 'ERRORS',
    IN_PROGRESS: 'IN-PROGRESS',
    SUCCESS: 'SUCCESS',
}

//initial state
export type initialUsersStateType = {
    users: Array<UserType>
    status: string
    pageSize: number
    totalUsersCount: number
    activePage: number
    isFetching: boolean
}

let initialUsersState: initialUsersStateType = {
    users: [],
    status: statuses.NOT_INITIALIZED,
    pageSize: 10,
    totalUsersCount: 0,
    activePage: 1,
    isFetching: false,
}

//reducer
const usersReducer = (state = initialUsersState, action: ActionUsersReducerType): initialUsersStateType => {

    switch (action.type) {
        case ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS:
            return {...state, users: state.users.map(u => action.userID === u.id ? {...u, followed: !u.followed} : u)}
        case ACTIONS_USER_REDUCER.SET_USERS:
            return {...state, users: [...action.users]}
        case ACTIONS_USER_REDUCER.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_USER_REDUCER.CHANGE_PAGE:
            return {...state, activePage: action.page}
        case ACTIONS_USER_REDUCER.SET_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case ACTIONS_USER_REDUCER.FETCHING:
            return {...state, isFetching: action.fetching}
        default:
            return state
    }
}

//action types
export type ActionUsersReducerType = ChangeFollowedStatusACType
                                    | SetUsersACType
                                    | SetStatusACType
                                    | ChangePageACType
                                    | SetUsersCountACType
                                    | FetchingACType

type ChangeFollowedStatusACType = { userID: number, type: typeof ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS }
type SetUsersACType = { users: UserType[], type: typeof ACTIONS_USER_REDUCER.SET_USERS }
type SetStatusACType = { status: string, type: typeof ACTIONS_USER_REDUCER.SET_STATUS }
type ChangePageACType = { page: number, type: typeof ACTIONS_USER_REDUCER.CHANGE_PAGE }
type SetUsersCountACType = { usersCount: number, type: typeof ACTIONS_USER_REDUCER.SET_USERS_COUNT }
type FetchingACType = { fetching: boolean, type: typeof ACTIONS_USER_REDUCER.FETCHING }

//action creators
export const changeFollowedStatusAC = (userID: number): ChangeFollowedStatusACType => {
    return {userID, type: ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS}
}
export const setUsersAC = (users: UserType[]): SetUsersACType => ({users, type: ACTIONS_USER_REDUCER.SET_USERS})
export const setStatusAC = (status: string): SetStatusACType => ({status, type: ACTIONS_USER_REDUCER.SET_STATUS})
export const changePageAC = (page: number): ChangePageACType => ({page, type: ACTIONS_USER_REDUCER.CHANGE_PAGE})
export const setUsersCountAC = (usersCount: number): SetUsersCountACType => ({usersCount, type: ACTIONS_USER_REDUCER.SET_USERS_COUNT})
export const fetchingAC = (fetching: boolean): FetchingACType => ({fetching, type: ACTIONS_USER_REDUCER.FETCHING})

export default usersReducer
