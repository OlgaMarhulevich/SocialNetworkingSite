const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const REMOVE_POST = 'REMOVE-POST';
const ADD_LIKE = 'ADD-LIKE';

type StateType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    newPostMessage: string
}

let initialState = {
    posts: [
        {id: 1, message: 'It is my first post!', likesCount: 25},
        {id: 2, message: 'How are you?', likesCount: 15},
    ],
    newPostMessage: ''
}

const profileReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostMessage === '') {
                return alert('Message could not be empty!')
            }
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostMessage,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostMessage = '';
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
            state.posts.map(post => {
                if(post.id === action.id) {
                    post.likesCount += 1;
                }
            })
            return state;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostMessageActionCreator = (postMessage: any) => {
    return {type: UPDATE_NEW_POST_MESSAGE, postMessage: postMessage};
}
export const removePostActionCreator = (id: number) =>
    ({type: REMOVE_POST, id: id});
export const addLikeActionCreator = (id: number) =>
    ({type: ADD_LIKE, id: id});

export default profileReducer;
