import React from 'react'
import css from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message"
import { Terminal} from 'react-feather';

const Dialogs = (props) =>{

    let dialogs = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Yana'},
        {id:3, name: 'Tanya'},
        {id:4, name: 'Kolya'},
    ]
    let messages =[
        {id:1, mess: 'hi',time: '20:31', side:'left'},
        {id:2, mess: 'hello',time: '20:32', side:'right'},
        {id:3, mess: 'how u',time: '20:33', side:'left'},
        {id:4, mess: 'fine. U?',time: '20:34', side:'right'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map(mess =>  <Message mess={mess.mess} side={mess.side} time={mess.time}/>)

    return(
        <div className={css.dialogs}>
           <div className={css.dialogsItems}>
               {dialogsElements}
           </div>
            <div className={css.messages}>
                {messagesElements}
                <div className={css.send_box}>
                    <div className={css.text}><textarea></textarea></div>
                    <div className={css.button}><Terminal/></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
