import React from 'react';
import s from './Aside.module.css';

function Aside() {
    return (
            <aside>
                <nav>
                    <a href="#" className={s.active}>Profile</a>
                    <a href="#">Messages</a>
                    <a href="#">News</a>
                    <a href="#">Music</a>
                    <a href="#" className={s.settings}>Settings</a>
                </nav>
            </aside>
    )
}

export default Aside;