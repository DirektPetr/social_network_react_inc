import posts from './Posts.module.css';
import { Post } from './Post/Post';
import logo__img1 from './../../../img/logo__img__1.jpg';
import logo__img2 from './../../../img/logo__img__2.jpg';
import logo__img3 from './../../../img/logo__img__3.jpg';
import logo__img4 from './../../../img/logo__img__4.jpg';
import logo__img5 from './../../../img/logo__img__5.jpg';


export const Posts = () => {
  return (
    <div className={posts.posts}>
      <h3>Posts</h3>
      <div className={posts.post}><Post img={logo__img1} like__count='Like 10'/></div>
      <div className={posts.post}><Post img={logo__img2} like__count='Like 44'/></div>
      <div className={posts.post}><Post img={logo__img3} like__count='Like 4'/></div>
      <div className={posts.post}><Post img={logo__img4} like__count='Like 15'/></div>
      <div className={posts.post}><Post img={logo__img5} like__count='Like 55'/></div>

    </div>
  )
}
