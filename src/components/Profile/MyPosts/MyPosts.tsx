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
    addPost: Function  // does not work  (postMessage: string) => void
    removePost: (id: number) => void
    updateNewPostMessage: Function
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements =
        props.posts.map(post =>
           <Post key={post.id} removePost={props.removePost} id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostCallback = () => {
        props.addPost();
    }

    const changeNewPostMessage = () => {
        props.updateNewPostMessage(newPostElement.current?.value)
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