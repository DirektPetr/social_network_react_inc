
import { Aplayer } from '../../Player/Aplayer.js';
import head from './Header.module.css';

export const Header = () => {
  return (
    <header className={head.header}>
      <Aplayer />
    </header>
  )
}