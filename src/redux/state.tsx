const store = {
    _renderEntireTree (_state: any) {
        console.log(_state);
    },
    subscribe (observer: any) {
        this._renderEntireTree = observer;
    },

    getter() {
        return this._state
    },
    setter(_state: any) {
        this._state = _state;
    },

    _state : {
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
                    img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                },
                {id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'},
                {id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'},
            ],
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
                {
                    id: 4,
                    name: 'Nick',
                    img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
                }
            ]
        }
    },

    dispatch(action?: any) {
        if (action.type === 'ADD-POST') {
            if (this._state.profilePage.newPostMessage === '') {
                return alert ('Message could not be empty!')
            }
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostMessage = '';
            this._renderEntireTree(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-MESSAGE') {
            this._state.profilePage.newPostMessage = action.postMessage;
            this._renderEntireTree(this._state);

        }  else if (action.type === 'REMOVE-POST') {
            this._state.profilePage.posts = this._state.profilePage.posts.filter(post => post.id !== action.id);
            this._renderEntireTree(this._state);

        }  else if (action.type === 'ADD-MESSAGE') {
            if (this._state.dialogsPage.newMessage === '') {
                return alert ('Message could not be empty!')
            }
            const newMessage = {message: this._state.dialogsPage.newMessage, name: 'Me', img: 'ava.jpg'};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._renderEntireTree(this._state);

        }  else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.message;
            this._renderEntireTree(this._state);
        }
    }
}


export default store;