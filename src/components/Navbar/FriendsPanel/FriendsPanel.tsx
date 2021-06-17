import React from 'react';
import s from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";

type FriendsPanelPropsType = {
    friends: {
        name: string,
        img: string
    }[]
}

function FriendsPanel(props: FriendsPanelPropsType) {

    let friendsPanel =
        props.friends.map(friend => <Friend name={friend.name} img={friend.img}/>)

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