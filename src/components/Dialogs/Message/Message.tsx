import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
    message: string,
    name: string,
    img: string
}

function Message(props: MessagePropsType) {

    let classMessageFrom = '.classMessageFrom';

    return (
        <div className={s.messageComponent}>
            <img className={s.img} src={props.img} alt="avatar"/>
            <div className={s.messageBackground}>
                <div className={s.tail}/>
                {/*<div className={`${s.messageBox} ${classMessageFrom}`}> */}
                {/* как передать сюда еще один класс classMessageFrom
                    (в браузере класс прописывается, но св-ва класса не применяются)*/}
                <div className={s.messageBox}>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>22:00</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
