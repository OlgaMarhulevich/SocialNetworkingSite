let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 25},
            {id: 2, message: 'How are you?', likesCount: 15},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nick'},
            {id: 2, name: 'Jhon'},
            {id: 3, name: 'Anna'},
        ],
        messages: [
            {message: 'Hi!'},
            {message: 'How are you?'},
            {message: 'Yo'},
        ]
    },
    friendsPage: {
        friends: [
            {name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'},
            {name: 'Merry', img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'},
            {name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'},
            {name: 'Nick', img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'}
        ]
    }
}

export default state;