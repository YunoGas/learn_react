import React from 'react'
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {Button, Box} from '@material-ui/core';

const MyPosts = (props) => {

    /*let posts = [
        {text:'Hello its my blog', likes:'5', dislikes:'9'},
        {text:'im new here', likes:'2', dislikes:'2'},
        {text:'wtf', likes:'5', dislikes:'2'},
    ]*/
    let postsElements = props.posts.map(post=> <Post text={post.text} likes={post.likes} dislikes={post.dislikes} />)

    let newPostElement = React.createRef()

    let addPost = () =>{
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={css.block}>
            <Box component="span" m={1}>
                <div className={css.textarea_block}>
                    <textarea ref={newPostElement}></textarea>
                    <Button color="primary">Add files</Button>
                    <button onClick={addPost}> add post</button>

                </div>
            </Box>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;