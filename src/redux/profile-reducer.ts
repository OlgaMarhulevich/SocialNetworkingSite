import {PostType, ProfileType, statuses} from "../entities/entities"
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export enum ACTIONS_PROFILE_TYPE {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE',
    REMOVE_POST = 'REMOVE-POST',
    ADD_LIKE = 'ADD-LIKE',
    SET_PROFILE = 'SET-PROFILE',
    SET_STATUS = 'SONET/PROFILE/SET-STATUS',
    TOGGLE_FETCHING = 'SONET/PROFILE/TOGGLE-FETCHING',
}

export type initialProfileStateType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostMessage: string
    status: string
    isFetching: boolean
}
let initialProfileState: initialProfileStateType = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }
    },
    posts: [
        {id: 1, message: 'It is my first post!', likesCount: 25},
        {id: 2, message: 'How are you?', likesCount: 15},
    ],
    newPostMessage: '',
    status: statuses.NOT_INITIALIZED,
    isFetching: false,
}

const profileReducer = (state = initialProfileState, action: ActionProfileReducerType): initialProfileStateType => {

    switch (action.type) {
        case ACTIONS_PROFILE_TYPE.ADD_POST:
            if (state.newPostMessage === '') {
                return state
            }
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostMessage,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostMessage: ''}
        case ACTIONS_PROFILE_TYPE.UPDATE_NEW_POST_MESSAGE:
            return {...state, newPostMessage: action.postMessage}
        case ACTIONS_PROFILE_TYPE.REMOVE_POST:
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Delete this post?')) {
                return {...state, posts: state.posts.filter(post => post.id !== action.id), newPostMessage: ''}
            }
            return state
        case ACTIONS_PROFILE_TYPE.ADD_LIKE:
            return {...state,
                posts: state.posts.map(post => post.id === action.id ? {...post, likesCount: ++post.likesCount} : post),
                newPostMessage: ''}
        case ACTIONS_PROFILE_TYPE.SET_PROFILE:
            return {...state, profile: action.profile}
        case ACTIONS_PROFILE_TYPE.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_PROFILE_TYPE.TOGGLE_FETCHING:
            return {...state, isFetching: action.fetching}
        default:
            return state
    }
}

//Action type
export type ActionProfileReducerType = addPostActionCreatorType
    | updateNewPostMessageActionCreatorType
    | removePostActionCreatorType
    | addLikeActionCreatorType
    | setProfileACType
    | SetStatusACType
    | FetchingACType

//types AC
type addPostActionCreatorType = { type: typeof ACTIONS_PROFILE_TYPE.ADD_POST }
type updateNewPostMessageActionCreatorType = { type: typeof ACTIONS_PROFILE_TYPE.UPDATE_NEW_POST_MESSAGE, postMessage: string }
type removePostActionCreatorType = { type: typeof ACTIONS_PROFILE_TYPE.REMOVE_POST, id: number }
type addLikeActionCreatorType = { type: typeof ACTIONS_PROFILE_TYPE.ADD_LIKE, id: number }
type setProfileACType = { type: typeof ACTIONS_PROFILE_TYPE.SET_PROFILE, profile: ProfileType }
type SetStatusACType = { status: string, type: typeof ACTIONS_PROFILE_TYPE.SET_STATUS }
type FetchingACType = { fetching: boolean, type: typeof ACTIONS_PROFILE_TYPE.TOGGLE_FETCHING }

//AC
export const addPost = (): addPostActionCreatorType => ({type: ACTIONS_PROFILE_TYPE.ADD_POST})
export const updateNewPostMessage = (postMessage: string = ''): updateNewPostMessageActionCreatorType => {
    return {type: ACTIONS_PROFILE_TYPE.UPDATE_NEW_POST_MESSAGE, postMessage: postMessage}
}
export const removePost = (id: number): removePostActionCreatorType => ({type: ACTIONS_PROFILE_TYPE.REMOVE_POST, id})
export const addLike = (id: number): addLikeActionCreatorType => ({type: ACTIONS_PROFILE_TYPE.ADD_LIKE, id})
export const setProfile = (profile: ProfileType): setProfileACType => ({type: ACTIONS_PROFILE_TYPE.SET_PROFILE, profile})
export const setStatus = (status: string): SetStatusACType => ({status, type: ACTIONS_PROFILE_TYPE.SET_STATUS})
export const setFetching = (fetching: boolean): FetchingACType => ({fetching, type: ACTIONS_PROFILE_TYPE.TOGGLE_FETCHING})

//thunk creators
export const getProfile = (userID: string) => (dispatch: Dispatch<ActionProfileReducerType>) => {
    dispatch(setStatus(statuses.IN_PROGRESS))
    dispatch(setFetching(false))
    profileAPI.getProfile(userID)
        .then((data) => {
            dispatch(setProfile(data))
            dispatch(setStatus(statuses.SUCCESS))
            dispatch(setFetching(true))
        })
}

export default profileReducer
