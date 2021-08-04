import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/redux-store";
import { initialProfileStateType } from '../../redux/profile-reducer';

type ProfilePropsType = {
    profilePage: initialProfileStateType
    dispatch: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            {/*<div className={s.image}> </div>  //pic   */}
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} newPostMessage={props.profilePage.newPostMessage}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;