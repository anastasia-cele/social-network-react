import React from "react";
import s from "./text.module.css";

function MessageText(props) {
    return(
        <div className={s.item}>{props.text}</div>
    )
}

export default MessageText;