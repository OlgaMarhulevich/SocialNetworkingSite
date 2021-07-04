import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

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
        props.dispatch({type: 'ADD-POST'});
    }
    const changeNewPostMessage = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-MESSAGE', postMessage: newPostElement.current?.value})
    }

    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <textarea value={props.newPostMessage} onChange={changeNewPostMessage} ref={newPostElement} className={s.textarea} placeholder='Your message...'/>
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