import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    changeFollowedStatus,
    changePage, setFetching,
    setStatus,
    setUsers,
    setUsersCount,
    statuses
} from "../../redux/users-reducer";
import {axiosInstance, ItemsType, UserType} from "../../entities/entities";
import {AxiosResponse} from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";


interface IUsersPropsType {
    users: Array<UserType>
    status: string
    changeFollowedStatus: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setStatus: (status: string) => void
    changePage: (page: number) => void
    setUsersCount: (usersCount: number) => void
    setFetching: (fetching: boolean) => void
    pageSize: number
    totalUsersCount: number
    activePage: number
    isFetching: boolean
}

interface IUsersState {
}

export class UsersClassContainer extends React.Component<IUsersPropsType, IUsersState> {

    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            this.props.setFetching(false)
            setTimeout(() => axiosInstance.get(`users?count=${this.props.pageSize}&page=${this.props.activePage}`)
                .then((response: AxiosResponse<ItemsType>) => {
                    this.props.setStatus(statuses.SUCCESS)
                    this.props.setUsersCount(response.data.totalCount)
                    this.props.setFetching(true)
                    //with photo:
                    //const items = response.data.items.filter(u => u.photos.small !== null)
                    return this.props.setUsers(response.data.items)
                }), 1000) //fake setTimeout for loading
        }
        /*alert('component did mount')*/
    }

    componentDidUpdate(prevProps: Readonly<IUsersPropsType>, prevState: Readonly<IUsersState>, snapshot?: any) {
        /*alert('component did update')*/
    }

    onClickPage = (page: number) => {
        this.props.changePage(page)
        this.props.setFetching(false)
        axiosInstance.get(`users?count=${this.props.pageSize}&page=${page}`)
            .then((response: AxiosResponse<ItemsType>) => {
                this.props.setStatus(statuses.SUCCESS)
                this.props.setFetching(true)
                return this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    status={this.props.status}
                    onClickPage={this.onClickPage}
                    activePage={this.props.activePage}
                    changeFollowedStatus={this.props.changeFollowedStatus}
                    setUsers={this.props.setUsers}
                    setUsersCount={this.props.setUsersCount}
                    changePage={this.props.changePage}
                    setStatus={this.props.setStatus}
                />
                :
                <Preloader/>
            }
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        status: state.usersPage.status,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        changeFollowedStatus,
        setUsers,
        setStatus,
        changePage,
        setUsersCount,
        setFetching,
    })(UsersClassContainer)