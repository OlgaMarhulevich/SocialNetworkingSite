import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profilePage: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[]
    },
    addPost: any
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            {/*<div className={s.image}> </div>*/}
            <ProfileInfo />
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;