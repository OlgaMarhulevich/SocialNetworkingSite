import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={s.logo}>
                <img src='https://img.apksum.com/9f/nicola.web/2.7/icon.png'/>
                <NavLink to="/profile">SoNet</NavLink>
            </div>
            <div></div>
        </header>
    )
}

export default Header;