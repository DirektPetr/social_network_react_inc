import music from './Music.module.css';


export const Music = () => {
  return ( 
    <section className={music.wrapper}>
      <div className={music.content}>
        <h3>Music</h3>
        <ul className="Music list">
          <li className="Music item">Music-1</li>
          <li className="Music item">Music-2</li>
          <li className="Music item">Music-3</li>
          <li className="Music item">Music-4</li>
          <li className="Music item">Music-5</li>
        </ul>
      </div>
    </section>
  )
}
