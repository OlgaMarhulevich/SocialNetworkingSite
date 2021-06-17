import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <p className={s.title}>My Posts</p>

            <div>
                <p className={s.newPost}>New post</p>

                <textarea placeholder='Your message...'></textarea>
                <div className={s.buttons}>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>

            </div>
            <Post message='Hi, how are you?' likesCount={5}/>
            <Post message="It's my first post!" likesCount={15}/>
        </div>
    )
}

export default MyPosts;