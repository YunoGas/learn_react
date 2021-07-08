import css from "./Message.module.css";
import React from "react";

const Message = (props) =>{
    return(
    <div className={css['block'] + " "+css[props.side]}>
<div className={css.message}>{props.mess}</div>
        <div className={css.time}>{props.time}</div>
    </div>
    )
}

export default Message