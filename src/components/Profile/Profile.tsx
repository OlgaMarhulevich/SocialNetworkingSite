import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profilePage: {
        posts: {
            id: number,
            message: string,
            likesCount: number
        }[],
        newPostMessage: string
    },
    dispatch: (action: Object) => void
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