import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

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
        }[],
        newMessage: string
    },
    dispatch: (action: Object) => void
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>
            <DialogItem img={dialog.img} id={dialog.id} name={dialog.name}/>)

    const messagesElements = props.dialogsPage.messages.map(message =>
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
    }

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
                <textarea onKeyPress={enterPressed} value={props.dialogsPage.newMessage} onChange={changeNewMessage} ref={newMessageElement} placeholder={'Text your message...'} className={s.textarea}/>
                <button onClick={addMessageCallback} className={s.button}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;
