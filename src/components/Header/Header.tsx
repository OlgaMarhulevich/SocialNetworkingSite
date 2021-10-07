import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
    userId: number | null
}

function Header(props: HeaderPropsType) {
    return (
        <header>
            <div className={s.logo}>
                <img alt={'logo'} src='https://img.apksum.com/9f/nicola.web/2.7/icon.png'/>
                <NavLink to="/profile">SoNet</NavLink>
            </div>

            {props.isAuth ?
                <div className={s.loginBox}>
                    <NavLink to={`/profile/${props.userId}`}>
                        <div className={s.greeting}>Hello, {props.login}!</div>
                    </NavLink>
                    <button className={s.logoutBtn} onClick={props.logout}>LogOut</button>
                </div>
                :
                <NavLink to="/login">LogIn</NavLink>
            }
        </header>
    )
}

export default Header;