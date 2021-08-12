import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'

function Profile() {
    return (
        <div>
            <ProfileInfo />
            <div className={s.imageBox}>
                <img src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={s.arrow}/>
                <img src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={`${s.arrow} ${s.arrowRight}`}/>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;