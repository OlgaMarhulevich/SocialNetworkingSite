import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsPanel from "./FriendsPanel/FriendsPanel";
import { Store } from 'redux';
import FriendsPanelContainer from "./FriendsPanel/FriendsPanelContainer";

type NavbarPropsType = {
    /*store: Store*/
}

function Navbar(props: NavbarPropsType) {
    return (
        <aside>
            <nav className={s.navbar}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.active} className={s.settings}>Settings</NavLink>
                <FriendsPanelContainer />
            </nav>
        </aside>
    )
}

export default Navbar;