import {Dispatch} from "redux";
import {authAPI} from "../api/api";

enum ACTIONS_AUTH_REDUCER {
    SET_USER_DATA = 'SET-USER-DATA',
}

export type initialAuthStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialAuthState: initialAuthStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

//REDUCER
const authReducer = (state = initialAuthState, action: ActionAuthReducerType): initialAuthStateType => {

    switch (action.type) {
        case ACTIONS_AUTH_REDUCER.SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

//AC
export type ActionAuthReducerType = SetUserDataACType

type SetUserDataACType = { type: typeof ACTIONS_AUTH_REDUCER.SET_USER_DATA, data: {id: number, email: string, login: string} }

export const setAuthUserData = (id: number, email: string, login: string): SetUserDataACType => ({ type: ACTIONS_AUTH_REDUCER.SET_USER_DATA, data: {id, email, login} })

//thunk
export const auth = () => (dispatch: Dispatch<ActionAuthReducerType>) => {
    authAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
        }
    })
}
export default authReducer;