import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ActionProfileReducerType} from "./profile-reducer";
import dialogsReducer, {ActionDialogsReducerType} from "./dialogs-reducer";
import friendsReducer, {ActionFriendsReducerType} from "./friends-reducer";
import usersReducer, {ActionUsersReducerType} from "./users-reducer";
import authReducer, {ActionAuthReducerType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>
export type AppActionsType = ActionAuthReducerType
    | ActionDialogsReducerType
    | ActionFriendsReducerType
    | ActionProfileReducerType
    | ActionUsersReducerType
    | FormAction

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.state= store.getState()

export default store;