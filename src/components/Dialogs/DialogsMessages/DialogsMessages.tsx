import s from "../DialogsMessages/DialogsMessages.module.css";
import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message/Message";

type DialogsMessagesPropsType = {
    dialog: {
        id: number,
        name: string,
        img: string,
        messages: {
            message: string,
            name: string,
            img: string
        }[]
    },
    newMessage: string,
    dispatch: (action: Object) => void
}

export const DialogsMessages = (props: DialogsMessagesPropsType) => {


    const messagesElements = props.dialog.messages.map(message =>
        <Message name={message.name} img={message.img} message={message.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageCallback = () => {
        props.dispatch(addMessageActionCreator(props.dialog.id));
    }
    const changeNewMessage = () => {
        const newMessage = newMessageElement.current?.value;
        props.dispatch(updateNewMessageActionCreator(newMessage));
    }

    const enterPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addMessageCallback()
        }
    }

    return (
        <div className={s.dialogsMessages}>
            <div className={s.messages}>
                { messagesElements}
            </div>
            <div className={s.sendBox}>
                <textarea onKeyPress={enterPressed} value={props.newMessage} onChange={changeNewMessage}
                          ref={newMessageElement} placeholder={'Text your message...'} className={s.textarea}/>
                <button onClick={addMessageCallback} className={s.button}>Send</button>
            </div>


        </div>

    )
}