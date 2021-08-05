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
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {
    /*store: Store*/
}

function MyPostsContainer(props: MyPostsContainerPropsType) {


    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState() as StateType
                //for MyPosts
                const addPostCallback = () => {
                    store.dispatch(addPostActionCreator());
                }
                const changeNewPostMessage = (newPostMessage: string) => {
                    store.dispatch(updateNewPostMessageActionCreator(newPostMessage))
                }
                //for Post
                const removePostCallback = (id: number) => {
                    store.dispatch(removePostActionCreator(id))
                }
                const addLikeCallback = (id: number) => {
                    store.dispatch(addLikeActionCreator(id))
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
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;