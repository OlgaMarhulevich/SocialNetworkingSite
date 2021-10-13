import React, {useState} from "react";
import {UserType} from "../../entities/entities";
import s from "./Users.module.css";
import {Pagination} from "../../common/pagination/Pagination";
import {User} from "./User/User";

//types
type UsersPropsType = {
    users: Array<UserType>
    status: string
    activePage: number
    totalUsersCount: number
    onClickPage: (page: number) => void
    pageSize: number
    isFollowing: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFilter: (filter: string) => void
    isAuth: boolean
}

//COMPONENT
export const Users: React.FC<UsersPropsType> = (props) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [timeoutId, setTimeoutId] = useState<any>(null)

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
        <p className={s.titlePage}>All users in SoNet</p>

        <div className={s.container}>

            <div className={s.searchBox}>
                <input className={s.search} placeholder={'Search...'} value={searchValue} onChange={onSearchChange}/>
            </div>

            {(!props.users.length) &&
            <span className={s.title} style={{margin: '20px'}}>
                Users not found
            </span>}

            {/*USERS*/}
            {props.users
                .map(u =>
                    <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} isAuth={props.isAuth} isFollowing={props.isFollowing}/>
                )}

            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                        onClickPage={props.onClickPage} activePage={props.activePage}/>

            {/*<button className={`${s.btn} ${s.showBtn}`}>SHOW MORE USERS</button>*/}
        </div>
    </>
}

