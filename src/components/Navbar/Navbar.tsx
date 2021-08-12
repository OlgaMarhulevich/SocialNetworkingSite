import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsPanelContainer from "./FriendsPanel/FriendsPanelContainer";

function Navbar() {
    return (
        <aside>
            <nav className={s.navbar}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/users" activeClassName={s.active} className={s.other}>Find users</NavLink>
                <NavLink to="/settings" activeClassName={s.active} className={s.other}>Settings</NavLink>
                <FriendsPanelContainer />
            </nav>
        </aside>
    )
}

export default Navbar;