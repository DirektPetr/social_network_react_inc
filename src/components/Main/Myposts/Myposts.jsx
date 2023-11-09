import myposts from './Myposts.module.css';

export const Myposts = () => {
  return (
    <div className={myposts.myposts}>
      <div className={myposts.title}>
        My posts
      </div>
      <div className={myposts.input}>
        <textarea />
      </div>
      <button className={myposts.button}>
        Send
      </button>
    </div>

  )
}
