import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

enum ACTIONS_AUTH_REDUCER {
    SET_USER_DATA = 'SET-USER-DATA',
}

export type initialAuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialAuthState: initialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//REDUCER
const authReducer = (state = initialAuthState, action: ActionAuthReducerType): initialAuthStateType => {

    switch (action.type) {
        case ACTIONS_AUTH_REDUCER.SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

//AC
export type ActionAuthReducerType = SetUserDataACType

type SetUserDataACType = {
    type: typeof ACTIONS_AUTH_REDUCER.SET_USER_DATA,
    payload: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

export const setAuthUserData = (id: (number|null), email: (string|null), login: (string|null), isAuth: boolean)
    : SetUserDataACType => ({
        type: ACTIONS_AUTH_REDUCER.SET_USER_DATA, payload: {id, email, login, isAuth}
})

//thunk
//через promise и Dispatch<Type>
export const auth = () => (dispatch: Dispatch<ActionAuthReducerType>) => {
    authAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
        }
    })
}
//через async/await и ThunkAction<...> type
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.resultCode === 0) {
        dispatch(auth())
    } else {
        const messageError = res.messages.length > 0 ? res.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}
export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) dispatch(setAuthUserData(null, null, null, false))
}

export default authReducer;