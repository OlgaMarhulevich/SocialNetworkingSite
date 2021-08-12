import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css";

type UsersPropsType = {
    users: Array<UserType>
    changeFollowedStatus: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    return (<div className={s.container}>
        {props.users
            .sort((x, y) => (x.followed === y.followed)? 0 : x.followed? -1 : 1)
            .map(u =>
            <div key={u.id} className={s.friendBox}>
                <div className={s.imgBox}>
                    <img alt={u.fullName} src={u.img} className={s.img}/>
                    <button className={`${s.followBtn} ${u.followed ? s.red : s.green}`}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
                <div className={s.infoBox}>
                    <div>
                        <p className={`${s.title} ${s.name}`}>Name: </p>
                        <p className={`${s.description} ${s.name}`}>{u.fullName}</p>
                    </div>
                    <div className={s.infoBottom}>
                        <div>
                            <p className={s.title}>Status: </p>
                            <p className={s.description}>{u.status}</p>
                        </div>
                        <div>
                            <p className={s.title}>Location: </p>
                            <p className={s.description}>{`${u.location.country}, ${u.location.city}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <button className={s.btn}>SHOW MORE USERS</button>
    </div>)
}