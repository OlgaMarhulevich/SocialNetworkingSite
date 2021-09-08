import React from "react";
import {statuses, UserType} from "../../entities/entities";
import s from "./Users.module.css";
import unknown from "../../assets/images/unknown.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";
//types
type UsersPropsType = {
    users: Array<UserType>
    status: string
    changeFollowedStatus: (userID: number, isFollow: boolean) => void
    setUsers: (users: UserType[]) => void
    setStatus: (status: string) => void
    changePage: (page: number) => void
    setUsersCount: (usersCount: number) => void
    activePage: number
    totalUsersCount: number
    pageSize: number
    onClickPage: (page: number) => void
    setFollowing: (following: boolean, userId: number) => void
    isFollowing: number[]
}

//COMPONENT
export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    pages.push('...')
    pages.push(pagesCount)

    const unfollow = (userId: number) => {
        props.setFollowing(true, userId)
        followAPI.unfollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    props.changeFollowedStatus(userId, false)
                    props.setFollowing(false, userId)
                }
            })
    }
    const follow = (userId: number) => {
        props.setFollowing(true, userId)
        followAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    props.changeFollowedStatus(userId, true)
                    props.setFollowing(false, userId)
                }
            })
    }

    return <>
        {/*TITLE*/}
        <p className={s.titlePage}>All users in SoNet</p>
        <div className={s.container}>
            {(!props.users.length && props.status === statuses.SUCCESS) &&
            <span className={s.title} style={{margin: '20px'}}>Users not found</span>}

            {/*USERS*/}
            {props.users.map(u =>
                <div key={u.id} className={s.friendBox}>
                    <div className={s.imgBox}>

                        {/*NAVLINK*/}
                        <NavLink to={'/profile/' + u.id}>
                            <img alt={u.name} src={u.photos.small || unknown} className={s.img}/>
                        </NavLink>

                        <button onClick={u.followed ? () => {
                            unfollow(u.id)
                        } : () => {
                            follow(u.id)
                        }}
                                className={`${s.followBtn} ${u.followed ? s.red : s.green} ${props.isFollowing
                                    .includes(u.id) ? s.disabled : ''}`}
                                disabled={props.isFollowing.some(i => i === u.id)}>
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
                        <span key={p + 'page'} className={s.pages}>...</span> :
                        <span key={p + ' page'}
                              onClick={() => props.onClickPage(+p)}
                              className={props.activePage === p ? `${s.activePage} ${s.pages}` : s.pages}>{p}</span>
                })}
            </div>

            {/*<button className={`${s.btn} ${s.showBtn}`}>SHOW MORE USERS</button>*/}
        </div>
    </>
}

