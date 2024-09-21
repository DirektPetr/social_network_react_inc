import s from './Profile.module.css';
import imgProfile from "./../../../img/1-profile.jpg"

export const ProfileInfo = () => {
  return (

      <div className={s.profile}>
        <div className='img-profile'><img className={s.logo} src={imgProfile} alt="logo-profile" /></div>

        <div className={s.profile__content}>
          <div className={s.profile__name}>Petr Nicolaevich</div>
          <div className={s.profile__description}>
            <ul className={s.list}>
              <li className={s.item}>Date of Birth: 6 april 1986</li>
              <li className={s.item}>City: Russia</li>
              <li className={s.item}>Education: SAFU'02</li>
              <li className={s.item}>Web Site: <a href='https://marfed.ru'>Marfed</a></li>
            </ul>
          </div>
        </div>
        
      </div>

  )
}
