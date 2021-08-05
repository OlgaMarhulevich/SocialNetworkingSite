import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
    /*store: Store*/
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            {/*<div className={s.image}> </div>  //pic   */}
            <ProfileInfo />
            <MyPostsContainer />{/*store={props.store}*/}
        </div>
    )
}

export default Profile;