const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

type StateType = {
    dialogs: {
        id: number,
        name: string,
        img: string,
        messages: {
            message: string,
            name: string,
            img: string
        }[],
    }[],
    newMessage: string
}

let initialState = {
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
                {message: 'Yo', name: 'Me', img: 'ava.jpg'},
                {message: "I'm fine! How're you?", name: 'Me', img: 'ava.jpg'},
            ],
        },
        {id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
            messages: [
                {
                    message: 'Hi!',
                    name: 'Jhon',
                    img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
                }]},
        {id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg',
            messages: [
                {
                    message: 'Hi!',
                    name: 'Anna',
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'
                }]},
    ],
    newMessage: ''
}

const dialogsReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (!state.newMessage.trim()) {
                state.newMessage = '';
                return state
            }
            const newMessage = {message: state.newMessage, name: 'Me', img: 'ava.jpg'};
            state.dialogs.map((dialog: any) => {
                if(dialog.id === action.id) {
                    dialog.messages.push(newMessage);
                }
            })
            state.newMessage = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE: {
            state.newMessage = action.message;
            return state;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (id: number) => ({type: ADD_MESSAGE, action: {id: id}});
export const updateNewMessageActionCreator = (message: any) => {
    return {type: UPDATE_NEW_MESSAGE, message: message};
}

export default dialogsReducer;