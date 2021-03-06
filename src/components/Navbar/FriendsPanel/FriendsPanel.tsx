import React from 'react';
import s from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";
import {UserType} from "../../../entities/entities";
import unknown from '../../../assets/images/unknown.png'

type FriendsPanelPropsType = {
    friends: Array<UserType>
}

function FriendsPanel(props: FriendsPanelPropsType) {

    let friendsPanel = props.friends.map(friend =>
                <Friend
                    key={friend.id}
                    id={friend.id}
                    name={friend.name.length > 7 ? (friend.name.slice(0, 6) + '...') : friend.name}
                    img={friend.photos.small || unknown}/>)

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