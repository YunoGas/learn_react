import React from 'react'
import css from './Post.module.css'
import { ThumbsUp, ThumbsDown} from 'react-feather';
import {Avatar} from '@material-ui/core';

const Post = (props) =>{
    return(
        <div className={css.item}>
            <div className={css.img_ava}>
                <img src='https://image.flaticon.com/icons/png/512/53/53166.png'></img>
            </div>

            <div className={css.content}>
                <div className={css.head_post}>
                    <div className={css.author}>author</div>
                    <div className={css.time}>3ч</div>
                </div>
                <div className={css.post}>{props.text}</div>
            </div>
            <div className={css.underContent}>
            {props.likes} <ThumbsUp color="green" size={24} /> {props.dislikes} <ThumbsDown color="red" size={24} stroke_width={2} />
            </div>
        </div>

    )
}

export default Post;