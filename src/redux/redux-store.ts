import {combineReducers, createStore} from "redux";
import profileReducer, {ActionProfileReducerType} from "./profile-reducer";
import dialogsReducer, {ActionDialogsReducerType} from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import { Store } from "redux";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
})

export type StateType = ReturnType<typeof reducers>
export type ActionType = ActionProfileReducerType | ActionDialogsReducerType

const store: Store = createStore(reducers);

export default store;