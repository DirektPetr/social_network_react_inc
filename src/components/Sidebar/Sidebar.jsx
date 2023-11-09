import logo from './../../img/logo.png';
import side from './Sidebar.module.css';


export const Sidebar = () => {
  return (
    <section className={side.sidebar}>
      <img className={side.img__logo} src={logo} />
      <nav className={side.menu__sidebar }>
        <div className={`${side.menu__item} ${side.active__item}`}><a href='#'>Profile</a></div>
        <div className={`${side.menu__item}`}><a href='#'>Messages</a></div>
        <div className={side.menu__item}><a href='#'>News</a></div>
        <div className={side.menu__item}><a href='#'>Music</a></div>
        <div className={side.menu__item}><a href='#'>Settings</a></div>
      </nav>
    </section>
  )
}
