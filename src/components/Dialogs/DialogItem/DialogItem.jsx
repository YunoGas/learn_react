import css from "./DialogItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import { User} from 'react-feather';
const DialogItem = (props) => {
    return (
        <div className={css.block}>
            <User/><NavLink to={"/dialogs/"+props.id} activeClassName={css.active}> {props.name}</NavLink>
        </div>
    )
}

export default DialogItem