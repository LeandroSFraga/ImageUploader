import Search from '../navbar/Search';
import Button from '../navbar/Button';
import styles from './navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Logo />
        <Search />
      </div>
      <div className={styles.navbar__right}>
        <Link to={'/upload'}><Button>Add a Photo</Button></Link>
        <BsFillPersonFill fill='#2F80ED' className={styles.iconPerfil}/>
      </div>
    </header>
  );
}