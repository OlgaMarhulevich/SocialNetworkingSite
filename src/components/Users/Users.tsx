import React from "react";
import {axiosInstance, ItemsType, UserType} from "../../entities/entities";
import {AxiosResponse} from "axios";
import s from "./Users.module.css";
import unknown from "../../assets/images/unknown.png";
import {statuses} from "../../redux/users-reducer";

interface IUsersPropsType {
    users: Array<UserType>
    status: string
    changeFollowedStatus: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setStatus: (status: string) => void
}

interface IUsersState {

}

export class Users extends React.Component<IUsersPropsType, IUsersState> {

    componentDidMount() {
        //if (this.props.users.length === 0) {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            setTimeout(() => axiosInstance.get("users?count=5")
                .then((response: AxiosResponse<ItemsType>) => {
                    this.props.setStatus(statuses.SUCCESS)
                    //with photo:
                    //const items = response.data.items.filter(u => u.photos.small !== null)
                    return this.props.setUsers(response.data.items)
                }), 3000) //setTimeout - fake
        }

        /*alert('component did mount')*/
    }

    componentDidUpdate(prevProps: Readonly<IUsersPropsType>, prevState: Readonly<IUsersState>, snapshot?: any) {

        /*alert('component did update')*/
    }

    render() {
        return <>
            <p className={s.titlePage}>All users in SoNet</p>
            <div className={s.container}>
                {(!this.props.users.length && this.props.status === statuses.SUCCESS) &&
                <span className={s.title} style={{margin: '20px'}}>Users not found</span>}
                {this.props.users
                    /*.sort((x, y) => (x.followed === y.followed)? 0 : x.followed? -1 : 1)*/
                    .map(u =>
                        <div key={u.id} className={s.friendBox}>
                            <div className={s.imgBox}>
                                <img alt={u.name} src={u.photos.small || unknown} className={s.img}/>
                                <button onClick={() => this.props.changeFollowedStatus(u.id)}
                                        className={`${s.followBtn} ${u.followed ? s.red : s.green}`}>
                                    {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                </button>
                            </div>
                            <div className={s.infoBox}>
                                <div>
                                    <p className={`${s.title} ${s.name}`}>Name: </p>
                                    <p className={`${s.description} ${s.name}`}>{u.name}</p>
                                </div>
                                <div className={s.infoBottom}>
                                    <div>
                                        <p className={s.title}>Status: </p>
                                        <p className={s.description}>{u.status || "Nothing yet..."}</p>
                                    </div>
                                    <div>
                                        <p className={s.title}>Location: </p>
                                        <p className={s.description}>{'location object will be here'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                <button className={`${s.btn} ${s.showBtn}`}>SHOW MORE USERS</button>
            </div>
        </>
    }
}
