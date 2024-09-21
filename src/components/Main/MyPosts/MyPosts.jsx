import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={''}>
            <div className={s.title}>
                <h3>My posts</h3>
            </div>
            <div className={s.input}>
                <textarea/>
            </div>
            <button className={s.button}>
                Add post
            </button>
        </div>
    )
}
