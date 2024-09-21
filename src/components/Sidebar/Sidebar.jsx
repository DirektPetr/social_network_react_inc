import logo from './../../img/logo.png';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const classActive = ({isActive}) => isActive ? s.active : ' ';

export const Sidebar = () => {
    return (
        <section className={s.sidebar_section}>
            <a href="/"><img className={s.img_logo} src={logo}/></a>
            <nav className={s.menu_sidebar}>
                <div className={s.menu_item}><NavLink className={classActive} to='/main'>Profile</NavLink></div>
                <div className={s.menu_item}><NavLink className={classActive} to='/dialogs'>Messages</NavLink></div>
                <div className={s.menu_item}><NavLink className={classActive} to='/news'>News</NavLink></div>
                <div className={s.menu_item}><NavLink className={classActive} to='/music'>Music</NavLink></div>
                <div className={s.menu_item}><NavLink className={classActive} to='/settings'>Settings</NavLink></div>
            </nav>
        </section>
    )
}
