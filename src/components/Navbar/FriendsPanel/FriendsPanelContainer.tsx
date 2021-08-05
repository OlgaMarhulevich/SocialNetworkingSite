import React from 'react';
import s from './FriendsPanel.module.css';
import Friend from "./Friend/Friend";
import {StoreContext} from "../../../StoreContext";
import {StateType} from "../../../redux/redux-store";

type FriendsPanelContainerPropsType = {}

function FriendsPanelContainer(props: FriendsPanelContainerPropsType) {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState() as StateType
                let friendsPanel =
                    state.friendsPage.friends.map(friend => <Friend key={friend.id} name={friend.name} img={friend.img}/>)
                return (
                    <div>
                        <p className={s.title}>Friends</p>
                        <div className={s.friends}>
                            {friendsPanel}
                        </div>
                    </div>
                )
            }}
        </StoreContext.Consumer>

    )
}

export default FriendsPanelContainer;