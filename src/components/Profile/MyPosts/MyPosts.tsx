import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[]
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements =
        props.posts.map ( post => <Post message={post.message} likesCount={post.likesCount}/> )

    return (
        <div>
            <p className={s.title}>My Posts</p>

            <div>
                <p className={s.newPost}>New post</p>

                <textarea placeholder='Your message...'/>
                <div className={s.buttons}>
                    <button>Add post</button>
                </div>

            </div>
            { postsElements }
        </div>
    )
}

export default MyPosts;