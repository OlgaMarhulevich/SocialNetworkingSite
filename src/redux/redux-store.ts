import {combineReducers, createStore} from "redux";
import profileReducer, {ActionProfileReducerType} from "./profile-reducer";
import dialogsReducer, {ActionDialogsReducerType} from "./dialogs-reducer";
import friendsReducer, {ActionFriendsReducerType} from "./friends-reducer";
import { Store } from "redux";
import usersReducer, {ActionUsersReducerType} from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
})

export type StateType = ReturnType<typeof reducers>
export type ActionType = ActionProfileReducerType | ActionDialogsReducerType | ActionFriendsReducerType | ActionUsersReducerType

const store: Store = createStore(reducers);

export default store;