import React from "react";
import {statuses} from "../../redux/users-reducer";
import {UserType} from "../../entities/entities";
import s from "./Users.module.css";
import unknown from "../../assets/images/unknown.png";


interface UsersPropsType {
    users: Array<UserType>
    status: string
    changeFollowedStatus: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setStatus: (status: string) => void
    changePage: (page: number) => void
    setUsersCount: (usersCount: number) => void
    activePage: number
    totalUsersCount: number
    pageSize: number
    onClickPage: (page: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    pages.push('...')
    pages.push(pagesCount)

    return <>
        {/*TITLE*/}
        <p className={s.titlePage}>All users in SoNet</p>
        <div className={s.container}>
            {(!props.users.length && props.status === statuses.SUCCESS) &&
            <span className={s.title} style={{margin: '20px'}}>Users not found</span>}

            {/*USERS*/}
            {props.users
                /*.sort((x, y) => (x.followed === y.followed)? 0 : x.followed? -1 : 1)*/
                .map(u =>
                    <div key={u.id} className={s.friendBox}>
                        <div className={s.imgBox}>
                            <img alt={u.name} src={u.photos.small || unknown} className={s.img}/>
                            <button onClick={() => props.changeFollowedStatus(u.id)}
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

            {/*PAGES*/}
            <div>
                {pages.map(p => {
                    return p === '...' ?
                        <span className={s.pages}>...</span> :
                        <span key={p + ' page'}
                              onClick={() => props.onClickPage(+p)}
                              className={props.activePage === p ? `${s.activePage} ${s.pages}` : s.pages}>{p}</span>
                })}
            </div>

            {/*<button className={`${s.btn} ${s.showBtn}`}>SHOW MORE USERS</button>*/}
        </div>
    </>
}

