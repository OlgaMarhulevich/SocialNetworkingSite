import React from 'react';
import {connect} from "react-redux";
import FriendsPanel from "./FriendsPanel";

//props
interface IFriendsPropsType {
}
interface IFriendsState {
}

class FriendsPanelContainer extends React.Component<IFriendsPropsType, IFriendsState> {

    componentDidMount() {
    }

    render() {
        return <FriendsPanel friends={[]}/>
    }
}

export default connect(() => {}, {})(FriendsPanelContainer)

