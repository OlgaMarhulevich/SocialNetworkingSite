import React from 'react';
import s from './Friend.module.css';

type FriendPropsType = {
    name: string,
    img: string
}

function Friend(props: FriendPropsType) {
    debugger
    return (
        <div className={s.friend}>
            <img alt={props.name} src={props.img} className={s.img}/>
            <p className={s.name}>{props.name}</p>
        </div>
    )
}

export default Friend;