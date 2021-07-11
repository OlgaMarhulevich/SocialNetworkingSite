import s from "../Dialogs.module.css";
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


/*    const messagesElements = props.dialogsPage.messages.map(message =>
        <Message name={message.name} img={message.img} message={message.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageCallback = () => {
        props.dispatch(addMessageActionCreator());
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
    }*/

    return (
        <div className={s.dialogsMessages}>
            {/*<div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.send}>
                <textarea onKeyPress={enterPressed} value={props.dialogsPage.newMessage} onChange={changeNewMessage}
                          ref={newMessageElement} placeholder={'Text your message...'} className={s.textarea}/>
                <button onClick={addMessageCallback} className={s.button}>Send</button>
            </div>*/}
            <span> hello {props.dialog.name}</span>

        </div>

    )
}