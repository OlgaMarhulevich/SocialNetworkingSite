import {PostType} from "../entities/entities";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const REMOVE_POST = 'REMOVE-POST';
const ADD_LIKE = 'ADD-LIKE';

export type initialProfileStateType = {
    posts: Array<PostType>
    newPostMessage: string
}
let initialProfileState: initialProfileStateType = {
    posts: [
        {id: 1, message: 'It is my first post!', likesCount: 25},
        {id: 2, message: 'How are you?', likesCount: 15},
    ],
    newPostMessage: ''
}

const profileReducer = (state = initialProfileState, action: ActionProfileReducerType): initialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostMessage === '') {
                alert('Message could not be empty!')
            } else {
                const newPost = {
                    id: state.posts.length + 1,
                    message: state.newPostMessage,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostMessage = '';
            }
            return state;
        }
        case UPDATE_NEW_POST_MESSAGE: {
            state.newPostMessage = action.postMessage;
            return state;
        }
        case REMOVE_POST: {
            state.posts = state.posts.filter(post => post.id !== action.id);
            return state;
        }
        case ADD_LIKE: {
            state.posts.forEach(post => post.id === action.id ? post.likesCount++ : post)
            return state;
        }
        default:
            return state;
    }
}

//Action creators
export type ActionProfileReducerType = addPostActionCreatorType
                                     | updateNewPostMessageActionCreatorType
                                     | removePostActionCreatorType
                                     | addLikeActionCreatorType

type addPostActionCreatorType = { type: typeof ADD_POST }
type updateNewPostMessageActionCreatorType = { type: typeof UPDATE_NEW_POST_MESSAGE, postMessage: string }
type removePostActionCreatorType = { type: typeof REMOVE_POST, id: number }
type addLikeActionCreatorType = { type: typeof ADD_LIKE, id: number }

export const addPostActionCreator = (): addPostActionCreatorType => ({type: ADD_POST});
export const updateNewPostMessageActionCreator = (postMessage: string = ''): updateNewPostMessageActionCreatorType => {
    return {type: UPDATE_NEW_POST_MESSAGE, postMessage: postMessage};
}
export const removePostActionCreator = (id: number): removePostActionCreatorType =>
    ({type: REMOVE_POST, id: id});
export const addLikeActionCreator = (id: number): addLikeActionCreatorType =>
    ({type: ADD_LIKE, id: id});


export default profileReducer;
