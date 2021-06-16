import React from 'react';
import Navbar from "./Navbar/Navbar";
import './Main.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import s from './Main.module.css';

function Main() {
    return (
            <main>
                <Navbar/>
                <div className={s.content}>
                    <Profile/>
                </div>
            </main>

    );
}

export default Main;