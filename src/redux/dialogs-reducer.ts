import {DialogType} from "../entities/entities";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

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
        },
    ]
}

const dialogsReducer = (state = initialDialogState, action: ActionDialogsReducerType): initialDialogsStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const currentDialog = state.dialogs.find(d => d.id === action.id) as DialogType
            if (!currentDialog.newMessage.trim()) {
                return {...state, dialogs: state.dialogs.map(d => d.id === action.id ? {...d, newMessage: ''} : d)}
            }
            const newMessage = {
                message: currentDialog.newMessage,
                name: 'Me',
                img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg'
            }
            return {
                ...state,
                dialogs: state.dialogs
                    .map(d => d.id === action.id ? {...d, messages: [...d.messages, newMessage], newMessage: ''} : d)
            }
        }
        case UPDATE_NEW_MESSAGE: {
            return {...state, dialogs: state.dialogs.map(d => d.id === action.id ? {...d, newMessage: action.message} : d)}
        }
        default:
            return state;
    }
}

//Action creators
export type ActionDialogsReducerType = addMessageActionCreatorType | updateNewMessageActionCreatorType

type addMessageActionCreatorType = { type: typeof ADD_MESSAGE, id: number }
type updateNewMessageActionCreatorType = { type: typeof UPDATE_NEW_MESSAGE, message: string, id: number }

export const addMessage = (id: number): addMessageActionCreatorType => ({type: ADD_MESSAGE, id: id});
export const changeNewMessage = (message: string = '', id: number): updateNewMessageActionCreatorType => {
    return {type: UPDATE_NEW_MESSAGE, message: message, id: id};
}

export default dialogsReducer;