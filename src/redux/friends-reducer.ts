import { FriendType } from "../entities/entities";

let initialFriendsState = {
    friends: [
        {id: 1, name: 'Jhon',  img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'},
        {id: 2, name: 'Merry', img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'},
        {id: 3, name: 'Anna',  img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'},
        {id: 4, name: 'Nick',  img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
        }
    ]
}

type initialFriendsStateType = {
    friends: Array<FriendType>
}

const friendsReducer = (state: initialFriendsStateType = initialFriendsState, action: any) => {
    return state;
}

export default friendsReducer;