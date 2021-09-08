import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    changeFollowedStatus,
    changePage, setFollowing, setLoading,
    setStatus,
    setUsers,
    setUsersCount
} from "../../redux/users-reducer";
import {ItemsType, statuses, UserType} from "../../entities/entities";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

//props
interface IUsersPropsType {
    users: Array<UserType>
    status: string
    changeFollowedStatus: (userID: number, isFollow: boolean) => void
    setUsers: (users: UserType[]) => void
    setStatus: (status: string) => void
    changePage: (page: number) => void
    setUsersCount: (usersCount: number) => void
    setLoading: (loading: boolean) => void
    setFollowing: (following: boolean, userId: number) => void
    pageSize: number
    totalUsersCount: number
    activePage: number
    isLoading: boolean
    isFollowing: number[]
}
interface IUsersState {
}

//COMPONENT
class UsersContainer extends React.Component<IUsersPropsType, IUsersState> {

    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            this.props.setLoading(true)

            usersAPI.getUsers(this.props.pageSize, this.props.activePage)
                .then((data) => {
                    this.props.setStatus(statuses.SUCCESS)
                    this.props.setUsersCount(data.totalCount)
                    this.props.setLoading(false)
                    return this.props.setUsers(data.items)
                })
        }
    }

    onClickPage = (page: number) => {
        this.props.changePage(page)
        this.props.setLoading(true)
        usersAPI.getUsers(this.props.pageSize, this.props.activePage)
            .then((data: ItemsType) => {
                this.props.setStatus(statuses.SUCCESS)
                this.props.setLoading(false)
                return this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isLoading ?
                <Preloader/>
                :
                <Users
                    {...this.props}
                    onClickPage={this.onClickPage}
                />
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
    }
}

export default connect(mapStateToProps,
    {
        changeFollowedStatus,
        setUsers,
        setStatus,
        changePage,
        setUsersCount,
        setLoading,
        setFollowing,
    })(UsersContainer)