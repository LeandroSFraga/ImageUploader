import Search from '../navbar/Search';
import Button from '../navbar/Button';
import styles from './navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import Perfil from './perfil';
import Modal from './Modal';
import { useState } from 'react';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link to={'/'}><Logo /></Link>
        <Search />
      </div>
      <div className={styles.navbar__right}>
        <Link to={'/upload'}><Button>Add a Photo</Button></Link>
        <div
          onClick={() => setShowModal(!showModal)}>
          <Perfil
            name={'Sem nome'}
            image={'https://via.placeholder.com/32'}
          />
        </div>
      </div>
      <Modal show={showModal} />

    </header>
  );
}