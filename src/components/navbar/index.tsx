import Search from '../navbar/Search';
import Button from '../navbar/Button';
import styles from './navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Logo />
        <Search />
      </div>
      <Link to={'/upload'}><Button>Add a Photo</Button></Link>
    </header>
  );
}