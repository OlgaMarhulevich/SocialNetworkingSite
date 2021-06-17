import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number,
    name: string
}

type MessagePropsType = {
    message: string
}

function DialogItem (props: DialogItemPropsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

function Message (props: MessagePropsType) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                <DialogItem id={1} name='Nick'/>
                <DialogItem id={2} name='David'/>
                <DialogItem id={3} name='Anna'/>
                <DialogItem id={4} name='Tom'/>
                <DialogItem id={5} name='Jerry'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;
