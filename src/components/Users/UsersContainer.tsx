import React from "react";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../redux/redux-store";
import {changeFollowedStatusAC, setUsersAC} from "../../redux/users-reducer";
import {UserType} from "../../entities/entities";
import { Users } from "./UsersClass";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        changeFollowedStatus: (userID: number) => dispatch(changeFollowedStatusAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)