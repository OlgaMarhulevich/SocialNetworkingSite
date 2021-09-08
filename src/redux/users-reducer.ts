import {statuses, UserType} from "../entities/entities";

//constants
enum ACTIONS_USER_REDUCER {
    CHANGE_FOLLOWED_STATUS = 'CHANGE-FOLLOWED-STATUS',
    SET_USERS = 'SONET/USERS/SET-USERS',  // уникализируем константу, чтобы избежать совпадений
    SET_STATUS = 'SONET/USERS/SET-STATUS',
    CHANGE_PAGE = 'SONET/USERS/CHANGE-PAGE',
    SET_USERS_COUNT = 'SONET/USERS/SET-USERS-COUNT',
    SET_LOADING = 'SONET/USERS/TOGGLE-FETCHING',
}

//initial state
export type initialUsersStateType = {
    users: Array<UserType>
    status: string
    pageSize: number
    totalUsersCount: number
    activePage: number
    isLoading: boolean
}

let initialUsersState: initialUsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    activePage: 1,
    isLoading: true,
    status: statuses.NOT_INITIALIZED,
}

//reducer
const usersReducer = (state = initialUsersState, action: ActionUsersReducerType): initialUsersStateType => {

    switch (action.type) {
        case ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS:
            return {...state, users: [...state.users.map(u => u.id === action.userID ? {...u, followed: action.isFollow} : u)]}
        case ACTIONS_USER_REDUCER.SET_USERS:
            return {...state, users: [...action.users]}
        case ACTIONS_USER_REDUCER.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_USER_REDUCER.CHANGE_PAGE:
            return {...state, activePage: action.page}
        case ACTIONS_USER_REDUCER.SET_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case ACTIONS_USER_REDUCER.SET_LOADING:
            return {...state, isLoading: action.fetching}
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
                                    | LoadingACType

type ChangeFollowedStatusACType = { userID: number, isFollow: boolean, type: typeof ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS }
type SetUsersACType = { users: UserType[], type: typeof ACTIONS_USER_REDUCER.SET_USERS }
type SetStatusACType = { status: string, type: typeof ACTIONS_USER_REDUCER.SET_STATUS }
type ChangePageACType = { page: number, type: typeof ACTIONS_USER_REDUCER.CHANGE_PAGE }
type SetUsersCountACType = { usersCount: number, type: typeof ACTIONS_USER_REDUCER.SET_USERS_COUNT }
type LoadingACType = { fetching: boolean, type: typeof ACTIONS_USER_REDUCER.SET_LOADING }

//action creators
export const changeFollowedStatus = (userID: number, isFollow: boolean): ChangeFollowedStatusACType => {
    return {userID, isFollow, type: ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS}
}
export const setUsers = (users: UserType[]): SetUsersACType => ({users, type: ACTIONS_USER_REDUCER.SET_USERS})
export const setStatus = (status: string): SetStatusACType => ({status, type: ACTIONS_USER_REDUCER.SET_STATUS})
export const changePage = (page: number): ChangePageACType => ({page, type: ACTIONS_USER_REDUCER.CHANGE_PAGE})
export const setUsersCount = (usersCount: number): SetUsersCountACType => ({usersCount, type: ACTIONS_USER_REDUCER.SET_USERS_COUNT})
export const setLoading = (fetching: boolean): LoadingACType => ({fetching, type: ACTIONS_USER_REDUCER.SET_LOADING})

export default usersReducer
