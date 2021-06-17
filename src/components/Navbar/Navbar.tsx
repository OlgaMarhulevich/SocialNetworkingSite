import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsPanel from "./FriendsPanel/FriendsPanel";

type NavbarPropsType = {
    friendsPage: {
        friends:
            {
                name: string,
                img: string
            }[]
    }
}

function Navbar(props: NavbarPropsType) {
    return (
        <aside>
            <nav className={s.navbar}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.active} className={s.settings}>Settings</NavLink>
                <FriendsPanel friends={props.friendsPage.friends}/>
            </nav>
        </aside>
    )
}

export default Navbar;