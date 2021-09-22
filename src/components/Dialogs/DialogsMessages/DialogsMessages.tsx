import s from "../DialogsMessages/DialogsMessages.module.css";
import React from "react";
import Message from "./Message/Message";
import {DialogType} from "../../../entities/entities";
import { DialogReduxForm } from "../DialogForm";

type DialogsMessagesPropsType = {
    dialog: DialogType
    addMessage: (id: number, newMessage: string) => void
    changeNewMessage: (newMessage: string, id: number) => void
}

export const DialogsMessages = (props: DialogsMessagesPropsType) => {

    const messagesElements = props.dialog.messages.map((message, index) =>
        <Message key={index} name={message.name} img={message.img} message={message.message}/>)

    const addNewMessage = (values: any) => {
        props.addMessage(props.dialog.id, values.newMessage)
    }

    return (
        <div className={s.dialogsMessages}>
            <div className={s.messages}>
                { messagesElements}
            </div>
            <DialogReduxForm onSubmit={addNewMessage}/>
        </div>

    )
}
