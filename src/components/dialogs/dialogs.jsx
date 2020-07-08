import React from "react";
import s from './dialogs.module.css';
import DialogWith from "./names/names";
import MessageText from "./text/text";


function Dialogs(props) {

    let dialogsElements =
        props.dialogPage.dialogs.map(user => <DialogWith id={user.id} name={user.name} avatar={user.url}/>);

    let messageElements =
        props.dialogPage.messages.map(message => <MessageText text={message.text}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogPage.newMessageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;