import React from "react";
import s from './dialogs.module.css';
import DialogWith from "./names/names";
import MessageText from "./text/text";


function Dialogs(props) {

    let dialogsElements =
        props.state.dialogs.map(user => <DialogWith id={user.id} name={user.name} avatar={user.url}/>);


    let messageElements =
        props.state.messages.map(message => <MessageText text={message.text}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;