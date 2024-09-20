import main from './Main.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import { Posts } from './Posts/Posts';
import { Profile } from './Profile/Profile';

export const Main = () => {
  return ( 
    <section className={main.main__content}>
      <div className={main.cover}></div>
        
        <Profile />
        <MyPosts />
        <Posts />


    </section>
  )
}
