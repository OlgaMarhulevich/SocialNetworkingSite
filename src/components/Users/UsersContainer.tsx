import React from "react";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../redux/redux-store";
import {changeFollowedStatusAC, setStatusAC, setUsersAC} from "../../redux/users-reducer";
import {UserType} from "../../entities/entities";
import { Users } from "./Users";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        status: state.usersPage.status
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        changeFollowedStatus: (userID: number) => dispatch(changeFollowedStatusAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setStatus: (status: string) => dispatch(setStatusAC(status))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)