import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostMessageActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    newPostMessage: string
    dispatch: (action: Object) => void
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements =
        props.posts.map(post =>
           <Post key={post.id} dispatch={props.dispatch} id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostCallback = () => {
        props.dispatch(addPostActionCreator());
    }
    const changeNewPostMessage = () => {
        const newPostMessage = newPostElement.current?.value;
        props.dispatch(updateNewPostMessageActionCreator(newPostMessage))
    }

    const enterPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addPostCallback()
        }
    }

    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <textarea onKeyPress={enterPressed} value={props.newPostMessage} onChange={changeNewPostMessage} ref={newPostElement} className={s.textarea} placeholder='Your message...'/>
                <div className={s.buttons}>
                    <button onClick={addPostCallback} className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;