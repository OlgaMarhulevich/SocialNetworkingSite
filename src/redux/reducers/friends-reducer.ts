import {UserType} from "../../entities/entities";

enum ACTIONS_FRIENDS_REDUCER {
    ADD_FRIEND = 'ADD-FRIEND',
    REMOVE_FRIEND = 'REMOVE-FRIEND',
    SET_FRIENDS = 'SET-FRIENDS',
}

type initialFriendsStateType = {
    friends: Array<UserType>
}
let initialFriendsState: initialFriendsStateType = {
    friends: []
}

const friendsReducer = (state = initialFriendsState, action: ActionFriendsReducerType) => {
    switch (action.type) {
        case ACTIONS_FRIENDS_REDUCER.ADD_FRIEND:
            return {...state, friends: [...state.friends, action.friend]}
        case ACTIONS_FRIENDS_REDUCER.REMOVE_FRIEND:
            return {...state, friends: state.friends.filter(f => f.id !== action.friendId)}
        case ACTIONS_FRIENDS_REDUCER.SET_FRIENDS:
            return {...state, friends: [...state.friends, ...action.users.filter(u => u.followed)]}
        default:
            return state;
    }
}

//Action creators
export type ActionFriendsReducerType = AddFriendACType | SetFriendsACType | RemoveFriendACType

type AddFriendACType = ReturnType<typeof addFriend>
type RemoveFriendACType = ReturnType<typeof removeFriend>
type SetFriendsACType = ReturnType<typeof setFriends>

export const addFriend = (friend: UserType) => ({friend, type: ACTIONS_FRIENDS_REDUCER.ADD_FRIEND} as const)
export const removeFriend = (friendId: number) => ({friendId, type: ACTIONS_FRIENDS_REDUCER.REMOVE_FRIEND} as const)
export const setFriends = (users: Array<UserType>) => ({users, type: ACTIONS_FRIENDS_REDUCER.SET_FRIENDS} as const)

export default friendsReducer;