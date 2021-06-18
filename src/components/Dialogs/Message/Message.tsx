import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
    message: string,
    name: string,
    img: string
}

function Message (props: MessagePropsType) {
    return (
        <div className={s.messageBlock} >
            <img className={s.img} src={props.img}/>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;
