import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props: {login: string, isAuth: boolean}) {
    return (
        <header>
            <div className={s.logo}>
                <img alt={'logo'} src='https://img.apksum.com/9f/nicola.web/2.7/icon.png'/>
                <NavLink to="/profile">SoNet</NavLink>
            </div>

            {props.isAuth ?
                <div className={s.greeting}>Hello, {props.login}</div>
                :
                <NavLink to="/login">LogIn</NavLink>
            }
        </header>
    )
}

export default Header;