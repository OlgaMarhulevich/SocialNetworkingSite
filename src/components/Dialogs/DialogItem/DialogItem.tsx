import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number,
    name: string,
    img: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={s.dialog} activeClassName={s.active}>
                <img className={s.img} src={props.img}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
