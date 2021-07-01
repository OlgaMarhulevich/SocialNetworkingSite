import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
    message: string,
    name: string,
    img: string
}

function Message(props: MessagePropsType) {

    const messageComponentFrom = () => {
        return (props.name === 'Me') ? s.messageComponentMe : s.messageComponent
    }
    const messageBabbleFrom = () => {
        return (props.name === 'Me') ? s.messageBabbleMe : s.messageBabble
    }
    const tailFrom = () => {
        return (props.name === 'Me') ? s.tailMe : s.tail
    }

    const messageBoxFrom = () => {
        return (props.name === 'Me') ? s.messageBoxMe : s.messageBox
    }


    return (
        <div className={messageComponentFrom()}>
            <img className={s.img} src={props.img} alt="avatar"/>
            <div className={messageBabbleFrom()}>
                <div className={tailFrom()}/>
                <div className={messageBoxFrom()}>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>22:00</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
