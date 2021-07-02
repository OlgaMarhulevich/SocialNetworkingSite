import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostMessage} from "../../redux/state";

type ProfilePropsType = {
    profilePage: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[],
        newPostMessage: string
    },
    addPost: () => void
    removePost: (id: number) => void
    updateNewPostMessage: (postMessage: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            {/*<div className={s.image}> </div>  //pic   */}
            <ProfileInfo />
            <MyPosts updateNewPostMessage={props.updateNewPostMessage} addPost={props.addPost} removePost={props.removePost} posts={props.profilePage.posts} newPostMessage={props.profilePage.newPostMessage}/>
        </div>
    )
}

export default Profile;