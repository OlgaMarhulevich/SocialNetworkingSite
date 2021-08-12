import React, {useEffect} from "react";
import s from "./Users.module.css";
import {UserType} from "../../entities/entities";
import {v1} from "uuid";

type UsersPropsType = {
    users: Array<UserType>
    changeFollowedStatus: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {

/*    useEffect(() => {
        props.setUsers([
            {id: v1(), img: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg', followed: true, fullName: 'John Snow', status: 'I am a boss', location: {country: 'Belarus', city: 'Minsk'}},
            {id: v1(), img: 'https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg', followed: false, fullName: 'Tom Smith', status: 'This is good idea', location: {country: 'Russia', city: 'Moscow'}},
            {id: v1(), img: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg', followed: true, fullName: 'Nick Fired', status: 'I like to eat', location: {country: 'Belarus', city: 'Gomel'}},
            {id: v1(), img: 'https://im0-tub-by.yandex.net/i?id=89f7bf04f56bbf8020fa9b668c941b7a&n=13', followed: false, fullName: 'Helen White', status: 'I like ice-cream', location: {country: 'Ukraine', city: 'Kiev'}},
            {id: v1(), img: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg', followed: false, fullName: 'Merry Swoune', status: 'I like ice-cream', location: {country: 'Belarus', city: 'Minsk'}},
            {id: v1(), img: 'https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg', followed: true, fullName: 'Anna Brine', status: 'I like ice-cream', location: {country: 'Belarus', city: 'Vitebsk'}}
        ])
    }, [])*/

    return (<>
            <p className={s.titlePage}>All users in SoNet</p>
            <div className={s.container}>
                {props.users
                    /*.sort((x, y) => (x.followed === y.followed)? 0 : x.followed? -1 : 1)*/
                    .map(u =>
                        <div key={u.id} className={s.friendBox}>
                            <div className={s.imgBox}>
                                <img alt={u.fullName} src={u.img} className={s.img}/>
                                <button onClick={() => props.changeFollowedStatus(u.id)}
                                        className={`${s.followBtn} ${u.followed ? s.red : s.green}`}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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

                <button className={`${s.btn} ${s.showBtn}`}>SHOW MORE USERS</button>
            </div>
        </>
    )
}