import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <aside>
            <nav>
                <a href="/profile" className={s.active}>Profile</a>
                <a href="/dialogs">Messages</a>
                <a href="/news">News</a>
                <a href="/music">Music</a>
                <a href="/settings" className={s.settings}>Settings</a>
            </nav>
        </aside>
    )
}

export default Navbar;