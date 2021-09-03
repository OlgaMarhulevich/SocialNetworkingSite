import React from 'react';
import {StateType} from "../../../redux/redux-store";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addLike, addPost, removePost, updateNewPostMessage} from "../../../redux/profile-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profile.posts,
        newPostMessage: state.profile.newPostMessage
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostMessage,
    addPost,
    removePost,
    addLike,
}) (MyPosts)

export default MyPostsContainer;