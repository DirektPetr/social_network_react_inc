import s from './MyPosts.module.css';

export const MyPosts = () => {
  return (
    <div className={''}>
      <div className={s.title}>
        My posts
      </div>
      <div className={s.input}>
        <textarea />
      </div>
      <button className={s.button}>
        Send
      </button>
    </div>
  )
}
