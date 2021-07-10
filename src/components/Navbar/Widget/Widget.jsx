import react from 'react'
import css from './Widget.module.css'
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import React from "react";

const Widget = (props) => {
    let widgetElements = props.content.map(line => <div className={css.content_line}>{line}</div>)
    return (
        <div className={css.block}>
            <div className={css.title}>
                {props.title}
            </div>
            <div className={css.content}>
                {widgetElements}
            </div>
        </div>
    )
}

export default Widget