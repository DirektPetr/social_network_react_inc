import logo from './../../img/logo.png';
import side from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

const classActive = ({isActive})=>isActive ? side.active : ' ';

export const Sidebar = () => {
  return (
    <section className={side.sidebar__section}>
      <img className={side.img__logo} src={logo} />
      <nav className={side.menu__sidebar}>
        <div className={side.menu__item}><NavLink className={classActive}  to='/main'>Profile</NavLink></div>
        <div className={side.menu__item}><NavLink className={classActive} to='/dialogs'>Messages</NavLink></div>
        <div className={side.menu__item}><NavLink className={classActive} to='/news'>News</NavLink></div>
        <div className={side.menu__item}><NavLink className={classActive} to='/music'>Music</NavLink></div>
        <div className={side.menu__item}><NavLink className={classActive} to='/settings'>Settings</NavLink></div>
      </nav>
    </section>
  )
}
