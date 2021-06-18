import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: {
            id: number,
            name: string,
            img: string
        }[],
        messages: {
            message: string,
            name: string,
            img: string
        }[]
    }
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem img={dialog.img} id={dialog.id}
                                                                              name={dialog.name}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message name={message.name} img={message.img}
                                                                              message={message.message}/>)

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <div className={s.names}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.send}>
                <textarea className={s.textarea}/>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;
