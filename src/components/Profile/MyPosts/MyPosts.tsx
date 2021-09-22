import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../entities/entities";
import {FormPostDataType, PostReduxForm} from "../PostForm";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
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

    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <PostReduxForm onSubmit={(values: FormPostDataType) => props.addPost(values.newMessage)}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


