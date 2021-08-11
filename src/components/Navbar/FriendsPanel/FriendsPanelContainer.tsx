import React from 'react';
import {StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import FriendsPanel from "./FriendsPanel";

const mapStateProps = (state: StateType) => {
    return {
        friends: state.friendsPage.friends
    }
}
const mapDispatchProps = () => {return {}}

const FriendsPanelContainer = connect(mapStateProps, mapDispatchProps) (FriendsPanel)

export default FriendsPanelContainer;