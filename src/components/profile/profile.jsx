import React from "react";
import MyPosts from "./myPosts/myPosts";
import Cover from "./cover/cover";
import About from "./about/about";

function Profile(props) {

    return (
        <div>
            <Cover/>
            <About/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
};

export default Profile;