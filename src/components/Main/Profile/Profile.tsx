import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div className={s.image}> </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;