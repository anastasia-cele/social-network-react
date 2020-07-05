import React from "react";
import s from "./friend.module.css"
import {NavLink} from "react-router-dom";

function Friend(props) {

    let path = "/" + props.id;

    return(
        <div className={s.item}>
            <img src={props.avatar} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default Friend;