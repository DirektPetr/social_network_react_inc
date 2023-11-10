
import settings from './Settings.module.css';



export const Settings = () => {
  return ( 
    <section className={settings.wrapper}>
      <div className={settings.content}>
        <h3>Settings</h3>
        <ul className="settings list">
          <li className="settings item">Settings-1</li>
          <li className="settings item">Settings-3</li>
          <li className="settings item">Settings-2</li>
          <li className="settings item">Settings-4</li>
          <li className="settings item">Settings-5</li>
        </ul>
      </div>
    </section>
  )
}
