import main from './Main.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import { Posts } from './Posts/Posts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Main = (props) => {
  return ( 
    <section className={main.main__content}>
      <div className={main.cover}></div>
        
        <ProfileInfo />
        <MyPosts />
        <Posts postsData={props.postsData} />

    </section>
  )
}
