import s from "../DialogsMessages/DialogsMessages.module.css";
import React from "react";
import Message from "./Message/Message";
import {DialogType} from "../../../entities/entities";

type DialogsMessagesPropsType = {
    dialog: DialogType
    addMessage: (id: number) => void
    changeNewMessage: (newMessage: string, id: number) => void
}

export const DialogsMessages = (props: DialogsMessagesPropsType) => {

    const messagesElements = props.dialog.messages.map(message =>
        <Message name={message.name} img={message.img} message={message.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageCallback = () => {
        props.addMessage(props.dialog.id)
    }
    const changeNewMessage = () => {
        const newMessage = newMessageElement.current?.value;
        newMessage && props.changeNewMessage(newMessage, props.dialog.id)
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
                <textarea onKeyPress={enterPressed} value={props.dialog.newMessage} onChange={changeNewMessage}
                          ref={newMessageElement} placeholder={'Text your message...'} className={s.textarea}/>
                <button onClick={addMessageCallback} className={s.button}>Send</button>
            </div>


        </div>

    )
}