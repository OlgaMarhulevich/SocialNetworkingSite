import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type StateType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.state= store.getState()

export default store;