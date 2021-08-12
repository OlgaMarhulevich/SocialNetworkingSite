import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const store = {
    _callSubscriber(_state: any) {
        console.log(_state);
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It is my first post!', likesCount: 25},
                {id: 2, message: 'How are you?', likesCount: 15},
            ],
            newPostMessage: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Nick',
                    img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg',
                    messages: [
                        {
                            message: 'Hi!',
                            name: 'Nick',
                            img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                        },
                        {
                            message: 'How are you?',
                            name: 'Nick',
                            img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                        },
                        {message: 'Yo', name: 'Me', img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'},
                        {message: "I'm fine! How're you?", name: 'Me', img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'},
                    ],
                    newMessage: ''
                },
                {
                    id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
                    messages: [
                        {
                            message: 'Hi!',
                            name: 'Jhon',
                            img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
                        }],
                    newMessage: ''
                },
                {
                    id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg',
                    messages: [
                        {
                            message: 'Hi!',
                            name: 'Anna',
                            img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'
                        }],
                    newMessage: ''
                }
            ]
        },
        friendsPage: {
            friends: []
        }
    },

    dispatch(action?: any) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;