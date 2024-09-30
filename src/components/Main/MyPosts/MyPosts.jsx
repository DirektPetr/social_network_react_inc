import s from './MyPosts.module.css';
import {useRef} from "react";
import {Post} from "../Post/Post";

export const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => (
        <Post img={post.img} message={post.message} likesCount={post.likesCount}/>))
    const refTextarea = useRef();

    const addPost = () => {

        let text = refTextarea.current.value;
        props.addPost(text);
        refTextarea.current.value = ''

    }
    return (
        <div className={''}>
            <div className={s.title}>
                <h3>My posts</h3>
            </div>
            <div className={s.input}>
                <textarea ref={refTextarea}/>
            </div>
            <button className={s.button} onClick={addPost}>Add post</button>
            <button className={s.button} onClick={() => alert('Delete post')}>Delete post</button>
            <div className={s.posts}>
                <h3>Posts</h3>
                {postsElements}
            </div>
        </div>
    )
}
