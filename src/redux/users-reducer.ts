import {statuses, UserType} from "../entities/entities";

//constants
enum ACTIONS_USER_REDUCER {
    CHANGE_FOLLOWED_STATUS = 'CHANGE-FOLLOWED-STATUS',
    SET_USERS = 'SONET/USERS/SET-USERS',  // уникализируем константу, чтобы избежать совпадений
    SET_STATUS = 'SONET/USERS/SET-STATUS',
    CHANGE_PAGE = 'SONET/USERS/CHANGE-PAGE',
    SET_USERS_COUNT = 'SONET/USERS/SET-USERS-COUNT',
    SET_LOADING = 'SONET/USERS/SET-LOADING',
    SET_FOLLOWING = 'SONET/USERS/SET-FOLLOWING',
}

//initial state
export type initialUsersStateType = {
    users: Array<UserType>
    status: string
    pageSize: number
    totalUsersCount: number
    activePage: number
    isLoading: boolean
    isFollowing: number[]
}

let initialUsersState: initialUsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    activePage: 1,
    isLoading: true,
    isFollowing: [],
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
            return {...state, isLoading: action.loading}
        case ACTIONS_USER_REDUCER.SET_FOLLOWING:
            return {...state,
                isFollowing: action.following ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(u => u !== action.userId) }
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
                                    | FollowingACType

type ChangeFollowedStatusACType = { userID: number, isFollow: boolean, type: typeof ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS }
type SetUsersACType = { users: UserType[], type: typeof ACTIONS_USER_REDUCER.SET_USERS }
type SetStatusACType = { status: string, type: typeof ACTIONS_USER_REDUCER.SET_STATUS }
type ChangePageACType = { page: number, type: typeof ACTIONS_USER_REDUCER.CHANGE_PAGE }
type SetUsersCountACType = { usersCount: number, type: typeof ACTIONS_USER_REDUCER.SET_USERS_COUNT }
type LoadingACType = { loading: boolean, type: typeof ACTIONS_USER_REDUCER.SET_LOADING }
type FollowingACType = { following: boolean, userId: number, type: typeof ACTIONS_USER_REDUCER.SET_FOLLOWING }

//action creators
export const changeFollowedStatus = (userID: number, isFollow: boolean): ChangeFollowedStatusACType => {
    return {userID, isFollow, type: ACTIONS_USER_REDUCER.CHANGE_FOLLOWED_STATUS}
}
export const setUsers = (users: UserType[]): SetUsersACType => ({users, type: ACTIONS_USER_REDUCER.SET_USERS})
export const setStatus = (status: string): SetStatusACType => ({status, type: ACTIONS_USER_REDUCER.SET_STATUS})
export const changePage = (page: number): ChangePageACType => ({page, type: ACTIONS_USER_REDUCER.CHANGE_PAGE})
export const setUsersCount = (usersCount: number): SetUsersCountACType => ({usersCount, type: ACTIONS_USER_REDUCER.SET_USERS_COUNT})
export const setLoading = (loading: boolean): LoadingACType => ({loading, type: ACTIONS_USER_REDUCER.SET_LOADING})
export const setFollowing = (following: boolean, userId: number): FollowingACType => ({following, userId, type: ACTIONS_USER_REDUCER.SET_FOLLOWING})

//thunk creators
export const getUsers = () => {

}

export default usersReducer
