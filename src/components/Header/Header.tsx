import React from 'react';
import s from './Header.module.css'

function Header() {
    return (
        <header>
            <div className={s.logo}>
                <img src='https://img.apksum.com/9f/nicola.web/2.7/icon.png'/>
                <a href='#'>Social networking site</a>
            </div>
            <div></div>
        </header>
    )
}

export default Header;