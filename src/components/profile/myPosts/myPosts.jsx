import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts(props) {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likes={post.likes}/>);

    return (
        <div className={s.posts}>
            <div className={s.title}>
                My Posts
            </div>
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.allposts}>
                {postsElements}
            </div>
        </div>

    )
};

export default MyPosts;