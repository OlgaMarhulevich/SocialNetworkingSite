import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div>
            {/*<div className={s.image}> </div>*/}
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}

export default Profile;