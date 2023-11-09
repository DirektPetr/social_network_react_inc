import post from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={post.post}>
      <img className={post.logo__img} src={props.img} alt="logo__img" />
      <div className={post.like}>{props.like__count}</div>

    </div>

  )
}
