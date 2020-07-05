import React from "react";
import s from "./names.module.css";
import {NavLink} from "react-router-dom";

function DialogWith(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.item}>
            <div className={s.avatar}><img src={props.avatar} alt=""/></div>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogWith;