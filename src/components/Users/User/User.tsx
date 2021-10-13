import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../entities/entities";
import s from "./User.module.css";
import unknown from "../../../assets/images/unknown.png";
import {useDispatch} from "react-redux";
import {addFriend, removeFriend} from "../../../redux/reducers/friends-reducer";

//types
type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isAuth: boolean
    isFollowing: number[]
}

//COMPONENT
export const User: React.FC<UserPropsType> = (
    {
        user,
        unfollow,
        follow,
        isAuth,
        isFollowing,

    }
) => {

    const dispatch = useDispatch()

    return <div className={s.friendBox}>
        <div className={s.imgBox}>

            {/*NAVLINK*/}
            <NavLink to={'/profile/' + user.id}>
                <img alt={user.name} src={user.photos.small || unknown} className={s.img}/>
            </NavLink>

            <button
                onClick={() => {
                    if (user.followed) {
                        unfollow(user.id)
                        dispatch(removeFriend(user.id))
                    } else {
                        follow(user.id)
                        dispatch(addFriend(user))
                    }
                }}
                className={`${s.followBtn} ${user.followed ? s.red : s.green} ${!isAuth || isFollowing
                    .includes(user.id) ? s.disabled : ''}`}
                disabled={!isAuth || isFollowing.some(i => i === user.id)}>
                {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
            </button>
        </div>
        <div className={s.infoBox}>
            <div>
                <p className={`${s.title} ${s.name}`}>Name: </p>
                <p className={`${s.description} ${s.name}`}>{user.name}</p>
            </div>
            <div className={s.infoBottom}>
                <div>
                    <p className={s.title}>Status: </p>
                    <p className={s.description}>{user.status || "Nothing yet..."}</p>
                </div>
            </div>
        </div>
    </div>
}

