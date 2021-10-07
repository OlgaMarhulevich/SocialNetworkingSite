import React from 'react';
import {connect} from "react-redux";
import FriendsPanel from "./FriendsPanel";
import {AppStateType} from "../../../redux/redux-store";
import {UserType} from "../../../entities/entities";
import {getUsersState} from "../../../redux/selectors";
import {setFriends} from "../../../redux/reducers/friends-reducer";

//props
interface IFriendsPropsType {
    users: Array<UserType>
    friends: Array<UserType>
    setFriends: (users: UserType[]) => void
}
class FriendsPanelContainer extends React.Component<IFriendsPropsType> {
    componentDidMount() {
        this.props.setFriends(this.props.users)
    }

    render() {
        return this.props.users.length ? <FriendsPanel friends={this.props.friends}/> : ''
    }
}

export default connect((state: AppStateType) => ({
    users: getUsersState(state),
    friends: state.friends.friends
}), {
    setFriends
})(FriendsPanelContainer)

