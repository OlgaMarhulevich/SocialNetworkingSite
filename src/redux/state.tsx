import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'It is my first post!', likesCount: 25},
            {id: 2, message: 'How are you?', likesCount: 15},
        ],
        newPostMessage: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nick', img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'},
            {id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'},
            {id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'},
        ],
        messages: [
            {message: 'Hi!', name: 'Nick', img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'},
            {message: 'How are you?', name: 'Nick', img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'},
            {message: 'Yo', name: 'Me', img: 'ava.jpg'},
            {message: "I'm fine! How're you?", name: 'Me', img: 'ava.jpg'},
        ],
        newMessage: ''
    },
    friendsPage: {
        friends: [
            {id: 1, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'},
            {id: 2, name: 'Merry', img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'},
            {id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'},
            {id: 4, name: 'Nick', img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'}
        ]
    }
}

export const addPost = () => {
    const newPost = {id: state.profilePage.posts.length + 1, message: state.profilePage.newPostMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostMessage = '';
    renderEntireTree(state);
}

export const updateNewPostMessage = (postMessage: string) => {
    state.profilePage.newPostMessage = postMessage
    renderEntireTree(state);
}

export const removePost = (id: number) => {
    state.profilePage.posts = state.profilePage.posts.filter(post => post.id !== id);
    renderEntireTree(state);
}

export const addMessage = () => {
    const newMessage = {message: state.dialogsPage.newMessage, name: 'Me', img: 'ava.jpg'};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    renderEntireTree(state);
}

export const updateNewMessage = (message: string) => {
    state.dialogsPage.newMessage = message;
    renderEntireTree(state);
}


export default state;