import head from './Header.module.css'

export const Header = () => {
  return (
    <header className={head.header__main}>
      <img className={head.img__logo} src='https://eaassets-a.akamaihd.net/battlelog/prod/emblem/472/84/320/3307924355356190576.png?v=1582742718' />
    </header>
  )
}