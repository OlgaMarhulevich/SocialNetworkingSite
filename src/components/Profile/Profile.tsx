import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {PostType, ProfileType} from "../../entities/entities";

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostMessage: string
    addPost: () => void
    updateNewPostMessage: (postMessage: string) => void
    removePost: (id: number) => void
    addLike: (id: number) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <div className={s.imageBox}>
                <img alt={'arrow-left'} src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={s.arrow}/>
                <img alt={'arrow-right'} src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={`${s.arrow} ${s.arrowRight}`}/>
            </div>
            <MyPosts
                {...props}
                /*posts={props.posts}
                newPostMessage={props.newPostMessage}
                addPost={props.addPost}
                updateNewPostMessage={props.updateNewPostMessage}
                removePost={props.removePost}
                addLike={props.addLike}*//>
        </div>
    )
}

export default Profile;