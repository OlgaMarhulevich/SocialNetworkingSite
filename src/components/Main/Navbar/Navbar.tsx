import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <aside>
            <nav>
                <a href="/profile" className={s.active}>Profile</a>
                <a href="/dialogs">Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
                <a href="#" className={s.settings}>Settings</a>
            </nav>
        </aside>
    )
}

export default Navbar;