import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    addPost: any
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        props.addPost(text);
    }
debugger
    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <textarea ref={newPostElement} className={s.textarea} placeholder='Your message...'/>
                <div className={s.buttons}>
                    <button onClick={addPost} className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;