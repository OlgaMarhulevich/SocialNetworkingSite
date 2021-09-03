import {statuses} from "../entities/entities";

enum ACTIONS_AUTH_REDUCER {
    SET_USER_DATA = 'SET-USER-DATA',
    SET_FETCHING = 'SET-FETCHING',
    SET_STATUS = 'SONET/USERS/SET-STATUS',
}

export type initialAuthStateType = {
    id: number
    email: string
    login: string
    isFetching: boolean
    status: string
    isAuth: boolean
}

let initialAuthState: initialAuthStateType = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    status: statuses.NOT_INITIALIZED,
    isAuth: false
}

const authReducer = (state = initialAuthState, action: ActionAuthReducerType): initialAuthStateType => {

    switch (action.type) {
        case ACTIONS_AUTH_REDUCER.SET_USER_DATA:
            return {...state, ...action.data, status: statuses.SUCCESS, isAuth: !!action.data.login}
        case ACTIONS_AUTH_REDUCER.SET_FETCHING:
            return {...state, isFetching: action.fetching}
        default:
            return state;
    }
}

//Action creators
export type ActionAuthReducerType = SetUserDataACType | SetFetchingACType | SetStatusACType

type SetUserDataACType = { type: typeof ACTIONS_AUTH_REDUCER.SET_USER_DATA, data: {id: number, email: string, login: string} }
type SetFetchingACType = { type: typeof ACTIONS_AUTH_REDUCER.SET_FETCHING, fetching: boolean }
type SetStatusACType = { status: string, type: typeof ACTIONS_AUTH_REDUCER.SET_STATUS }

export const setAuthUserData = (id: number, email: string, login: string): SetUserDataACType => ({ type: ACTIONS_AUTH_REDUCER.SET_USER_DATA, data: {id, email, login} });
export const setFetching = (fetching: boolean): SetFetchingACType => ({ type: ACTIONS_AUTH_REDUCER.SET_FETCHING, fetching });
export const setStatus = (status: string): SetStatusACType => ({status, type: ACTIONS_AUTH_REDUCER.SET_STATUS})

export default authReducer;