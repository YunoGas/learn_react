import React from 'react';
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={`${css.item}`}><NavLink to="/profile" activeClassName={css.active}>PROFILE</NavLink></div>
            <div className={css.item}><NavLink to="/dialogs" activeClassName={css.active}>MESSAGES</NavLink></div>
            <div className={css.item}><NavLink to="/news" activeClassName={css.active}>NEWS</NavLink></div>
            <div className={css.item}><NavLink to="/musics" activeClassName={css.active}>MUSIC</NavLink></div>
            <div className={css.item}><NavLink to="/settings" activeClassName={css.active}>SETTINGS</NavLink></div>
        </nav>
    )
}

export default Navbar