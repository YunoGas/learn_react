import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message"
import {Terminal} from 'react-feather';

const Dialogs = (props) => {


    let dialogsElements = props.data.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.data.messages.map(mess => <Message mess={mess.mess} side={mess.side}
                                                                    time={mess.time}/>)

    let newMess = React.createRef()
    let sendMess = () =>{
        let text = newMess.current.value
        alert(text)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
                <div className={css.send_box}>
                    <div className={css.text}>
                        <textarea ref={newMess}></textarea>
                    </div>
                    <div className={css.button}><button onClick={sendMess}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
