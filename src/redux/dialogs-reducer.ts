const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

type StateType = {
    dialogs: {
        id: number,
        name: string,
        img: string
    }[],
    messages: {
        message: string,
        name: string,
        img: string
    }[],
    newMessage: string
}

const dialogsReducer = (state: StateType, action: any) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.newMessage === '') {
                return alert('Message could not be empty!')
            }
            const newMessage = {message: state.newMessage, name: 'Me', img: 'ava.jpg'};
            state.messages.push(newMessage);
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

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (message: any) => {
    return {type: UPDATE_NEW_MESSAGE, message: message};
}

export default dialogsReducer;