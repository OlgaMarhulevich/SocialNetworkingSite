import React from 'react';
import {StateType} from "../../../redux/redux-store";
import {Store} from "redux";
import {
    addLikeActionCreator,
    addPostActionCreator,
    removePostActionCreator,
    updateNewPostMessageActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
    store: Store
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    const state = props.store.getState() as StateType
    //for MyPosts
    const addPostCallback = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const changeNewPostMessage = (newPostMessage: string) => {
        props.store.dispatch(updateNewPostMessageActionCreator(newPostMessage))
    }
    //for Post
    const removePostCallback = (id: number) => {
        props.store.dispatch(removePostActionCreator(id))
    }
    const addLikeCallback = (id: number) => {
        props.store.dispatch(addLikeActionCreator(id))
    }

    return (
        <MyPosts
            addPost={addPostCallback}
            updateNewPostMessage={(newPostMessage) => changeNewPostMessage(newPostMessage)}
            posts={state.profilePage.posts}
            newPostMessage={state.profilePage.newPostMessage}
            removePost={(id) => removePostCallback(id)}
            addLike={(id) => addLikeCallback(id)}/>
    )
}

export default MyPostsContainer;