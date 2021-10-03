import React from 'react';
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addLike, addPost, removePost} from "../../../redux/reducers/profile-reducer";
import {getPosts} from "../../../redux/selectors";

const mapStateToProps = (state: AppStateType) => ({posts: getPosts(state)})

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    removePost,
    addLike,
}) (MyPosts)

export default MyPostsContainer;