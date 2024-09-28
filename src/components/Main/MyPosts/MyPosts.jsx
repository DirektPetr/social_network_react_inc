import s from './MyPosts.module.css';
import {useRef} from "react";






export const MyPosts = () => {
    const refTextarea = useRef();

    const addPost = () => {
        let text = refTextarea.current.value;
        alert(text)
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

        </div>
    )
}
