import React from 'react';
import {connect} from "react-redux";
import FriendsPanel from "./FriendsPanel";
import {AppStateType} from "../../../redux/redux-store";
import {UserType} from "../../../entities/entities";
import {getUsersState} from "../../../redux/selectors";

//props
interface IFriendsPropsType {
    users: Array<UserType>
}
class FriendsPanelContainer extends React.Component<IFriendsPropsType> {

    render() {
        return <FriendsPanel friends={this.props.users.filter(u => u.followed)}/>
    }
}

export default connect((state: AppStateType) => ({users: getUsersState(state)}), {})(FriendsPanelContainer)

