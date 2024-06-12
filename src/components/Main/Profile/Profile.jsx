import profile from './Profile.module.css';
import imgprofile from "./../../../img/1-profile.jpg"

export const Profile = () => {
  return (

      <div className={profile.profile}>
        <div className='img-profile'><img className={profile.logo} src={imgprofile} alt="logo-profile" /></div>

        <div className={profile.profile__content}>
          <div className={profile.profile__name}>Petr Nicolaevich</div>
          <div className={profile.profile__description}>
            <ul className={profile.list}>
              <li className={profile.item}>Date of Birth: 6 april 1986</li>
              <li className={profile.item}>City: Russia</li>
              <li className={profile.item}>Education: SAFU'02</li>
              <li className={profile.item}>Web Site: <a href='https://marfed.ru'>Marfed</a></li>
            </ul>
          </div>
        </div>
        
      </div>

  )
}
