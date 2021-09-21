import React from 'react';
import {StateType} from "../../../redux/redux-store";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addLike, addPost, removePost} from "../../../redux/profile-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profile.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    removePost,
    addLike,
}) (MyPosts)

export default MyPostsContainer;