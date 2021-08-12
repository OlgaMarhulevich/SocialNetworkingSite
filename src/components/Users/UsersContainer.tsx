import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, StateType} from "../../redux/redux-store";
import {changeFollowedStatusAC, setUsersAC, UserType} from "../../redux/users-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.findUsersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        changeFollowedStatus: (userID: string) => dispatch(changeFollowedStatusAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)