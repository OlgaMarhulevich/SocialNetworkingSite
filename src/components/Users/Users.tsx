import React, {useState} from "react";
import {UserType} from "../../entities/entities";
import s from "./Users.module.css";
import unknown from "../../assets/images/unknown.png";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addFriend, removeFriend} from "../../redux/reducers/friends-reducer";

//types
type UsersPropsType = {
    users: Array<UserType>
    status: string
    activePage: number
    totalUsersCount: number
    pageSize: number
    onClickPage: (page: number) => void
    isFollowing: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFilter: (filter: string) => void
}

//COMPONENT
export const Users: React.FC<UsersPropsType> = (props) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [timeoutId, setTimeoutId] = useState<any>(null)

    const dispatch = useDispatch()

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    pages.push('...')
    pages.push(pagesCount)

    const unfollow = (userId: number) => {
        props.unfollow(userId)
    }
    const follow = (userId: number) => {
        props.follow(userId)
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setSearchValue(value)

        if (timeoutId) clearTimeout(timeoutId)

        const newTimeoutId = setTimeout(() => {
            props.setFilter(value)
        }, 1000)

        setTimeoutId(newTimeoutId)
    }

    return <>
        {/*TITLE*/}
        <p className={s.titlePage}>All users in SoNet</p>
        <div className={s.container}>

            <div className={s.searchBox}>
                <input className={s.search} placeholder={'Search...'} value={searchValue} onChange={onSearchChange}/>
            </div>

            {(!props.users.length) &&
            <span className={s.title} style={{margin: '20px'}}>Users not found</span>}

            {/*USERS*/}
            {props.users
                .map(u =>
                    <div key={u.id} className={s.friendBox}>
                        <div className={s.imgBox}>

                            {/*NAVLINK*/}
                            <NavLink to={'/profile/' + u.id}>
                                <img alt={u.name} src={u.photos.small || unknown} className={s.img}/>
                            </NavLink>

                            <button
                                onClick={() => {
                                    if (u.followed) {
                                        unfollow(u.id)
                                        dispatch(removeFriend(u.id))
                                    } else {
                                        follow(u.id)
                                        dispatch(addFriend(u))
                                    }
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

