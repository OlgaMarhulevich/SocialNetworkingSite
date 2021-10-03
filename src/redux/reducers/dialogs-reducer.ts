import {DialogType} from "../../entities/entities";

const ADD_MESSAGE = 'ADD-MESSAGE';

export type initialDialogsStateType = {
    dialogs: Array<DialogType>
}
let initialDialogState: initialDialogsStateType = {
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
                {
                    message: 'Yo',
                    name: 'Me',
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
                },
                {
                    message: "I'm fine! How're you?",
                    name: 'Me',
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
                },
            ],
        },
        {
            id: 2, name: 'Jhon', img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
            messages: [
                {
                    message: 'Hi!',
                    name: 'Jhon',
                    img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg'
                }],
        },
        {
            id: 3, name: 'Anna', img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg',
            messages: [
                {
                    message: 'Hi!',
                    name: 'Anna',
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg'
                }],
        },
    ]
}

const dialogsReducer = (state = initialDialogState, action: ActionDialogsReducerType): initialDialogsStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (!action.newMessage.trim()) {
                return {...state}
            }
            const newMessage = {
                message: action.newMessage,
                name: 'Me',
                img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
            }
            return {
                ...state,
                dialogs: state.dialogs
                    .map(d => d.id === action.id ? {...d, messages: [...d.messages, newMessage]} : d)
            }
        }
        default:
            return state;
    }
}

//Action creators
export type ActionDialogsReducerType = addMessageActionCreatorType

type addMessageActionCreatorType = { type: typeof ADD_MESSAGE, id: number, newMessage: string }

export const addMessage = (id: number, newMessage: string): addMessageActionCreatorType => ({type: ADD_MESSAGE, id, newMessage});

export default dialogsReducer;