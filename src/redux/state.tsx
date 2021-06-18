let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 25},
            {id: 2, message: 'How are you?', likesCount: 15},
        ]
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