import {AppThunkType} from "../redux-store";
import {auth} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED'

type initialApStateType = {
    isInitialized: boolean
}
let initialAppState: initialApStateType = {
    isInitialized: false
}

const appReducer = (state = initialAppState, action: ActionAppReducerType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, isInitialized: true}
        default:
            return state;
    }
}

//Action creators
export type ActionAppReducerType = SetInitializedACType

type SetInitializedACType = ReturnType<typeof initializeSuccess>
export const initializeSuccess = () => ({type: SET_INITIALIZED} as const)

//thunk
export const initializedApp = (): AppThunkType => dispatch => {
    Promise.all([dispatch(auth())])
        .then(() => dispatch(initializeSuccess()))
}

export default appReducer;