import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {PostType, ProfileType} from "../../entities/entities";

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    addPost: () => void
    removePost: (id: number) => void
    addLike: (id: number) => void
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                profileStatus={props.profileStatus}
                updateProfileStatus={props.updateProfileStatus}/>
            <div className={s.imageBox}>
                <img alt={'arrow-left'} src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={s.arrow}/>
                <img alt={'arrow-right'} src={'https://piaspb.ru/img/new-img/arrows-l.png'} className={`${s.arrow} ${s.arrowRight}`}/>
            </div>
            <MyPosts {...props}/>
        </div>
    )
}

export default Profile;