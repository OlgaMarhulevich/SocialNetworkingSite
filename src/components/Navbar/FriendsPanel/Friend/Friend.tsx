import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";

type FriendPropsType = {
    name: string,
    img: string
    id: number
}

function Friend(props: FriendPropsType) {
    return (
        <div className={s.friend}>
            <NavLink to={'/profile/' + props.id}>
                <img alt={props.name} src={props.img} className={s.img}/>
            </NavLink>
            <p className={s.name}>{props.name}</p>
        </div>
    )
}

export default Friend;