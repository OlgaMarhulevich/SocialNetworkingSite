import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../entities/entities";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostMessage: string
    addPost: () => void
    updateNewPostMessage: (newPostMessage: string) => void
    removePost: (id: number) => void
    addLike: (id: number) => void
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements =
        props.posts.map(post =>
           <Post key={post.id}
                 id={post.id}
                 message={post.message}
                 likesCount={post.likesCount}
                 removePost={(id) => props.removePost(id)}
                 addLike={(id) => props.addLike(id)}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostCallback = () => {
        props.addPost()
    }
    const changeNewPostMessage = () => {
        const newPostMessage = newPostElement.current?.value
        newPostMessage && props.updateNewPostMessage(newPostMessage)
    }

    const enterPressed = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
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