import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changePage, follow, requestUsers, setFilter, unfollow} from "../../redux/reducers/users-reducer";
import {UserType} from "../../entities/entities";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getActivePage, getFilteredUsers,
    getIsFollowing,
    getIsLoadingUsers,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/selectors";

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
    setFilter: (filter: string) => void
}

interface IUsersState {
}

//COMPONENT
class UsersContainer extends React.Component<IUsersPropsType, IUsersState> {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.activePage)
    }

    onClickPage = (page: number) => {
        this.props.changePage(page)
        this.props.getUsers(this.props.pageSize, page)
    }

    render() {
        return <>
            {this.props.isLoading ?
                <Preloader/>
                :
                <Users {...this.props} onClickPage={this.onClickPage}/>
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getFilteredUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        activePage: getActivePage(state),
        isLoading: getIsLoadingUsers(state),
        isFollowing: getIsFollowing(state),
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            changePage,
            getUsers: requestUsers,
            follow,
            unfollow,
            setFilter
        })
)(UsersContainer)

