import React from 'react';
import s from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";
import {UserType} from "../../../entities/entities";

type FriendsPanelPropsType = {
    users: Array<UserType>
    friends: Array<UserType>
}

function FriendsPanel(props: FriendsPanelPropsType) {

    let friendsPanel =
        props.users
            .filter(u => u.followed)
            .map(friend => <Friend key={friend.id} name={friend.fullName} img={friend.img}/>)

    return (
        <div>
            <p className={s.title}>Friends</p>
            <div className={s.friends}>
                {friendsPanel}
            </div>
        </div>
    )
}

export default FriendsPanel;