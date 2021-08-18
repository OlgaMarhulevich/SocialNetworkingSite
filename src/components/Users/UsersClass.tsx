import React from "react";
import {UserType} from "../../entities/entities";
import axios from "axios";
import s from "./Users.module.css";
import unknown from "../../assets/images/unknown.png";

interface IUsersPropsType {
    users: Array<UserType>
    changeFollowedStatus: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

interface IUsersState {

}

export class Users extends React.Component<IUsersPropsType, IUsersState> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => this.props.setUsers(response.data.items))
        }

        alert('component did mount')
    }

    componentDidUpdate(prevProps: Readonly<IUsersPropsType>, prevState: Readonly<IUsersState>, snapshot?: any) {
        alert('component did update')
    }

    render() {
        return <>
            <p className={s.titlePage}>All users in SoNet</p>
            <div className={s.container}>
                {this.props.users
                    /*.sort((x, y) => (x.followed === y.followed)? 0 : x.followed? -1 : 1)*/
                    .map(u =>
                        <div key={u.id} className={s.friendBox}>
                            <div className={s.imgBox}>
                                <img alt={u.name} src={u.photos.small || unknown} className={s.img}/>
                                <button onClick={() => this.props.changeFollowedStatus(u.id)}
                                        className={`${s.followBtn} ${u.followed ? s.red : s.green}`}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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
