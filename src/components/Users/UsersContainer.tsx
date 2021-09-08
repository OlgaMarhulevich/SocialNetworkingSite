import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {changePage, follow, getUsers, unfollow} from "../../redux/users-reducer";
import {statuses, UserType} from "../../entities/entities";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {Redirect} from "react-router";

//props
interface IUsersPropsType {
    isLoading: boolean
    changePage: (page: number) => void
    getUsers: (pageSize: number, activePage: number) => void
    users: Array<UserType>
    status: string
    activePage: number
    totalUsersCount: number
    pageSize: number
    isFollowing: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isAuth: boolean
}

interface IUsersState {
}

//COMPONENT
class UsersContainer extends React.Component<IUsersPropsType, IUsersState> {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.getUsers(this.props.pageSize, this.props.activePage)
        }
    }

    onClickPage = (page: number) => {
        this.props.changePage(page)
        this.props.getUsers(this.props.pageSize, page)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <>
            {this.props.isLoading ?
                <Preloader/>
                :
                <Users {...this.props} onClickPage={this.onClickPage}/>
            }
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.users.users,
        status: state.users.status,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        activePage: state.users.activePage,
        isLoading: state.users.isLoading,
        isFollowing: state.users.isFollowing,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,
    {
        changePage,
        getUsers,
        follow,
        unfollow,
    })(UsersContainer)