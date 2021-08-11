import React from 'react';
import {ActionType, StateType} from "../../../redux/redux-store";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {
    addLikeActionCreator,
    addPostActionCreator,
    removePostActionCreator,
    updateNewPostMessageActionCreator
} from "../../../redux/profile-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostMessage: (newPostMessage: string) => dispatch(updateNewPostMessageActionCreator(newPostMessage)),
        addPost: () => dispatch(addPostActionCreator()),
        removePost: (id: number) => dispatch(removePostActionCreator(id)),
        addLike: (id: number) => dispatch(addLikeActionCreator(id))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;