import s from './Posts.module.css';
import {Post} from './Post/Post';

export const Posts = (props) => {
    let postsElements = props.postsData.map(post => (
        <Post img={post.img} message={post.message} likesCount={post.likesCount}/>))
    return (
        <div className={s.posts}>
            <h3>Posts</h3>
            {postsElements}
        </div>
    )
}
