import React from "react";
import s from "./names.module.css";
import {NavLink} from "react-router-dom";

function DialogWith(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogWith;