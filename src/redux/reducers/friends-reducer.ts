import {UserType} from "../../entities/entities";

enum ACTIONS_FRIENDS_REDUCER {
    ADD_FRIEND = 'ADD-FRIEND',
    REMOVE_FRIEND = 'REMOVE-FRIEND',
    SET_LOADING = 'SET-LOADING',
}

type initialFriendsStateType = {
    friends: Array<UserType>
    isLoading: boolean
}
let initialFriendsState: initialFriendsStateType = {
    friends: [],
    isLoading: true
}

const friendsReducer = (state = initialFriendsState, action: ActionFriendsReducerType) => {
    switch (action.type) {
        case ACTIONS_FRIENDS_REDUCER.ADD_FRIEND: {
            debugger
            return {...state, friends: [...state.friends, action.friend]}
        }

        case ACTIONS_FRIENDS_REDUCER.REMOVE_FRIEND:
            return {...state, friends: state.friends.filter(f => f.id !== action.friendId)}
        default:
            return state;
    }
}

//Action creators
export type ActionFriendsReducerType = AddFriendACType | SetLoadingACType | RemoveFriendACType

type AddFriendACType = ReturnType<typeof addFriend>
type RemoveFriendACType = ReturnType<typeof removeFriend>
type SetLoadingACType = ReturnType<typeof setLoading>

export const addFriend = (friend: UserType) => ({friend, type: ACTIONS_FRIENDS_REDUCER.ADD_FRIEND} as const)
export const setLoading = (loading: boolean) => ({loading, type: ACTIONS_FRIENDS_REDUCER.SET_LOADING} as const)
export const removeFriend = (friendId: number) => ({friendId, type: ACTIONS_FRIENDS_REDUCER.REMOVE_FRIEND} as const)

export default friendsReducer;