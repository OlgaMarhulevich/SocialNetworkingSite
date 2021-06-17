import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    postsData: any
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            {/*<div className={s.image}> </div>*/}
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;