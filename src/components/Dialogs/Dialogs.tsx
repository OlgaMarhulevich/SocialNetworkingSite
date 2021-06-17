import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: {
            id: number,
            name: string
        }[],
        messages: {
            message: string
        }[]
    }
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
