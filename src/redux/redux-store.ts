import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ActionProfileReducerType} from "./reducers/profile-reducer";
import dialogsReducer, {ActionDialogsReducerType} from "./reducers/dialogs-reducer";
import friendsReducer, {ActionFriendsReducerType} from "./reducers/friends-reducer";
import usersReducer, {ActionUsersReducerType} from "./reducers/users-reducer";
import authReducer, {ActionAuthReducerType} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app-reducer";

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