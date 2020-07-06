import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts(props) {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likes={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.posts}>
            <div className={s.title}>
                My Posts
            </div>
            <div className={s.newPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.allposts}>
                {postsElements}
            </div>
        </div>

    )
};

export default MyPosts;