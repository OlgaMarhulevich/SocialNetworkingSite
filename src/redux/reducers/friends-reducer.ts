import {UserType} from "../../entities/entities";

enum ACTIONS_FRIENDS_REDUCER {
    SET_FRIENDS = 'SET-FRIENDS',
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
        case "SET-FRIENDS":
            return {...state, friends: [...state.friends, action.friends]}
        default:
            return state;
    }
}

//Action creators
export type ActionFriendsReducerType = SetFriendsACType | SetLoadingACType

type SetFriendsACType = { friends: UserType[], type: typeof ACTIONS_FRIENDS_REDUCER.SET_FRIENDS}
type SetLoadingACType = { loading: boolean, type: typeof ACTIONS_FRIENDS_REDUCER.SET_LOADING}

export const setFriends = (friends: UserType[]): SetFriendsACType => ({friends, type: ACTIONS_FRIENDS_REDUCER.SET_FRIENDS})
export const setLoading = (loading: boolean): SetLoadingACType => ({loading, type: ACTIONS_FRIENDS_REDUCER.SET_LOADING})



export default friendsReducer;