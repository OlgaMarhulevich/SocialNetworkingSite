import { UserType } from "../entities/entities";

let initialFriendsState = {
    friends: []
}

type initialFriendsStateType = {
    friends: Array<UserType>
}

const friendsReducer = (state: initialFriendsStateType = initialFriendsState, action: ActionFriendsReducerType) => {
    return state;
}

//Action creators

export type ActionFriendsReducerType = {type: 'FRIENDS'}

export default friendsReducer;